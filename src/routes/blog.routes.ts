import express, { Application, Request, Response, NextFunction, type Router } from 'express';

import { blogController, BlogController } from "../controllers/blog.controller";
import { validateRequest } from "../middleware/validateRequest";
import { RedisSetOptions } from "../blogs/blog.interface";
import { getUrlQueryParametersForClient } from "../middleware/handleUrlQueryParametersForClient"

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

interface ClientInfo {
    [key: string]: any;
    url: string;
    message: string;
}

interface CustomRequest extends Request {
    requestInfo?: ClientInfo;
}

const clientInfoRequestHandler = (req: CustomRequest, res: Response, next: NextFunction, msg: string): void => {
    const url = req.protocol + '://' + req.get('host') + req.originalUrl;
    const client_info: ClientInfo = {
        ...req.headers,
        url: url,
        message: msg
    };
    console.log('clientInfoRequestHandler:', client_info);

    req.requestInfo = client_info;
    next();
};

blogsRouter.get(
    "/blog",
    // authentification,
    // authorization(["admin"]),
    BlogController.getBlog
);

blogsRouter.get("/blog/:id",
    validateRequest(),
    redisCachingMiddleware(redisCachingOptions),
    blogController.getAllBlogs);


blogsRouter.route('/blogs').get(function (req, res, next) {
    getUrlQueryParametersForClient(req, res, next, 'Getting URL Query Parameters for client')
},
BlogController.getBlog);


// blogsRouter.get("/blogAll",
//     handleOriginalUrlQuery(req, res, next, 'Blog'),
//     blogController.getAllBlogs);

blogsRouter.get("/favourites", blogController.getFavourites);