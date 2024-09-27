import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { UserRouter } from './routes/user'
import { BlogRouter } from './routes/blog'
import { cors } from 'hono/cors'

const app = new Hono<{
  Bindings:{ 
    DATABASE_URL: string,
    JWT_SECRET: string,
  }
}>()
app.use('/*', cors());
app.route("/api/v1/user", UserRouter);
app.route("/api/v1/blog", BlogRouter);

app.get('/', (c) => {
  return c.text('Hello Hono!')
})




export default app
