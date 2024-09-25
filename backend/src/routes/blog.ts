import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign, verify, decode } from 'hono/jwt'
import { createBlogInput, updateBlogInput } from "@adithya-kothamasu/medium-common";

export const BlogRouter = new Hono<{
    Bindings:{
        DATABASE_URL: string,
        JWT_SECRET: string,
    },
    Variables:{
        userId: string;
    }
}>()

BlogRouter.use("/*", async(c,next)=>{
    const authHeader = c.req.header("Authorization") || "";
    const token = authHeader.split(" ")[1];
    try{
        const response = await verify(token, c.env.JWT_SECRET);
  
        if(response.id){
            c.set("userId", String(response.id));
            await next();
        }else{
            c.status(403);
            return c.json({
                error: "You are not logged in"
            })
        }
    }catch(e){
        c.status(403);
        return c.json({
            error: "You are not logged in"
        })
    }
    
})


BlogRouter.post("/", async(c)=>{
    const body = await c.req.json();
    const { success } = createBlogInput.safeParse(body);
    if(!success){
        c.status(411);
        return c.json({
            message: "Invalid inputs"
        })
    }
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());
    const userId = c.get("userId");
    const blog = await prisma.post.create({
        data:{
            title: body.title,
            content: body.content,
            authorId: userId,
        }
    })

    return c.json({
        id: blog.id,
    })
});


BlogRouter.put("/", async(c)=>{
    const body = await c.req.json();
    const { success } = updateBlogInput.safeParse(body);
    if(!success){
        c.status(411);
        return c.json({
            message: "Invalid inputs"
        })
    }
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());

    const blog = await prisma.post.update({
        where:{
            id: body.id,
        },
        data:{
            title: body.title,
            content: body.content,
        }
    })
    return c.json({
        id: blog.id
    })
});

BlogRouter.get("/bulk", async(c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());
    const blogs = await prisma.post.findMany();

    return c.json({
        blogs
    })
})

BlogRouter.get("/:id", async(c)=>{
    const id = c.req.param("id");
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());

    try{
        const blog = await prisma.post.findFirst({
            where:{
                id: id,
            }
        });
        return c.json({
            blog
        });
    }catch(e){
        c.status(411);
        return c.json({
            error: "Error while fetching blog post"
        });
    }
})