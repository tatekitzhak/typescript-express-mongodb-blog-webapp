import { type Router } from "express";
import express, { Application, Request, Response, NextFunction } from 'express';


// import { createApiResponse } from "@/api-docs/openAPIResponseBuilders";
// import { GetUserSchema, UserSchema } from "@/api/user/userModel";
// import { validateRequest } from "@/common/utils/httpHandlers";
import { blogsController, blogController } from "./blogsController";

export const blogsRouter: Router = express.Router()

function redisCachingMiddleware(abc:any): any {
  return (req: Request, res: Response, next: NextFunction) => {
    console.log('redisCachingMiddleware::', abc)
    next()
  }
}

function validateRequest(): any {
  return (req: Request, res: Response, next: NextFunction) => {
    console.log('validateRequest::')
    next()
  }
}

blogsRouter.get("/blogs", validateRequest() , redisCachingMiddleware({
    options: {
      EX:  43200, // 12h
      NX: false, // write the data even if the key already exists
    },
  }),blogsController);

blogsRouter.get("/allblogs", blogController.getAllBlogs);

blogsRouter.get("/favourites", blogController.getFavourites);



// userRouter.get("/blogs/:id", validateRequest(GetUserSchema), userController.getUser);