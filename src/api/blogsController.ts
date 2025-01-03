import express, { Application, Request, Response, RequestHandler, NextFunction } from 'express';


import * as database from "../blogs/blogs.database";
import { UnitUser, EnumServiceGetOrderBy } from "../blogs/blog.interface";


class BlogController {
  public getAllBlogs: RequestHandler = async (_req: Request, res: Response) => {
    
    try {
        const allBlogs : UnitUser[] = await database.findAll();
        console.log('allBlogs:', allBlogs)
        if (!allBlogs.length) {
            return res.status(400).json({msg : `No allBlogs at this time..`})
        }

        return res.status(200).json({
            status: 'status',
            message: 'class BlogController',
            data: 'Data',
            total_blogs : allBlogs.length, 
            allBlogs
        })

    } catch (error) {
        return res.status(500).json({error})
    }
  };

  public getFavourites: RequestHandler = async (req: Request, res: Response) => {
    
    try {
        // simulate the time to retrieve the user list
        await new Promise((resolve) => setTimeout(resolve, 250));
        const allBlogs : EnumServiceGetOrderBy | null = await database.findAllFavourites('34abc567');
        console.log('allBlogs:', allBlogs)
        if (!allBlogs) {
            return res.status(400).json({msg : `No allBlogs at this time..`})
        }

        return res.status(200).json({
            status: 'status',
            message: 'class BlogController',
            data: 'Data',
            total_blogs : allBlogs, 
            allBlogs
        })

    } catch (error) {
        return res.status(500).json({error})
    }

  };
}



export const blogController = new BlogController();


export const blogsController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const allBlogs : UnitUser[] = await database.findAll()

        if (!allBlogs) {
            return res.status(400).json({msg : `No allBlogs at this time..`})
        }

        return res.status(200).json({
            status: 'status',
            message: 'message',
            data: 'function blogsController',
            total_blogs : allBlogs.length, 
            allBlogs
        })

    } catch (error) {
        return res.status(500).json({error})
    }
}