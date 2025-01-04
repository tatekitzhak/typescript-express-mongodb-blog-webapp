import express, { Application, Request, Response, NextFunction, type Router } from 'express';

import { blogController, BlogController } from "../controllers/blog.controller";

export const blogsRouter: Router = express.Router()

const router: Router = express.Router();

function redisCachingMiddleware(abc: any): any {
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

blogsRouter.get(
    "/blog",
    // authentification,
    // authorization(["admin"]),
    BlogController.getBlog
);

blogsRouter.get("/blogs", validateRequest(), redisCachingMiddleware({
    options: {
        EX: 43200, // 12h
        NX: false, // write the data even if the key already exists
    },
}), blogController.getAllBlogs);

blogsRouter.get("/favourites", blogController.getFavourites);

export { router as blogRouter };
