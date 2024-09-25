import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign, verify, decode } from 'hono/jwt'
import { signinInput, signupInput } from '@adithya-kothamasu/medium-common'
export const UserRouter = new Hono<{
    Bindings:{ 
        DATABASE_URL: string,
        JWT_SECRET: string,
    }
}>();


UserRouter.post("/signup", async (c)=>{
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
  
    const body = await c.req.json();
    const { success,error } = signupInput.safeParse(body);
    if(!success){
        c.status(411);
        return c.json({
            body,
            message: "Invalid inputs",
            error: error.issues
        });
    }
    const user = await prisma.user.create({
      data:{
        email: body.email,
        name: body.name,
        password: body.password,
      }
    })
  
    const token = await sign({
      id: user.id,
    }, c.env.JWT_SECRET);
  
    return c.json({
      jwt: token,
      msg:"signup success"
    })
  })
  
UserRouter.post("/signin", async(c)=>{
    const prisma = new PrismaClient({
      datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());
    
  
    const body = await c.req.json();
    const { success,error } = signinInput.safeParse(body);
    if(!success){
        c.status(411);
        return c.json({
            body,
            message: "Invalid inputs",
            error: error.issues
        });
    }
    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
        password: body.password,
      }
    });
  
    if(!user){
      c.status(403);
      return c.json({
        error: "User does not exist"
      });
    }
  
    const jwt = await sign({id: user.id}, c.env.JWT_SECRET);
    return c.json({
      jwt,
      msg:"signin success"
    });
  });