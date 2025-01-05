import express, { Application, Request, Response, NextFunction, type Router } from 'express';

import { blogController, BlogController } from "../controllers/blog.controller";
import { validateRequest } from "../middleware/validateRequest";
import { RedisSetOptions } from "../blogs/blog.interface";

export const blogsRouter: Router = express.Router()

function redisCachingMiddleware(abc: any): any {
    return (req: Request, res: Response, next: NextFunction) => {
        console.log('redisCachingMiddleware::', abc)
        next()
    }
}

const redisCachingOptions: RedisSetOptions = {
    options: {
        EX: 43200, // 12h
        NX: false, // write the data even if the key already exists
    },
}

blogsRouter.get(
    "/blog",
    // authentification,
    // authorization(["admin"]),
    BlogController.getBlog
);

blogsRouter.get("/blogs",
    validateRequest(),
    redisCachingMiddleware(redisCachingOptions),
    blogController.getAllBlogs);

blogsRouter.get("/favourites", blogController.getFavourites);