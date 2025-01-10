import { Request, Response, RequestHandler, NextFunction } from 'express';

import { DatabaseService } from '../db/databaseService';
import * as database from "../blogs/blogs.database";
import { UnitUser, EnumServiceGetOrderBy } from "../blogs/blog.interface";
import { ConnectionConfig } from "../configs";


interface CustomRequest extends Request {
    request_data?: any;
    requestInfo?: any;
}

let uri: string = ConnectionConfig.db['uri'] as string;
let dbName = process.env.MONGODB_DB;


export class BlogController {

    static async getBlog(req: Request, res: Response, next: NextFunction) {
        console.log('BlogControllerreq.originalUrl::', (req as CustomRequest).requestInfo)
        const getUrlQueryParametersForClient = (req as CustomRequest).requestInfo;

        try {
            
            const dbServiceInstance = new DatabaseService(uri, dbName);

            const categoryCollections = await dbServiceInstance.readFromDatabase(req, res, next);

            res.status(200).json({
                data: categoryCollections,
                clientInfo: getUrlQueryParametersForClient
            });


        } catch (error) {
            console.error("Database connection error:1:", error);
            next(new Error(`No URI available for MongoDB connection:1: ${error}`));

        }

    }

    public getAllBlogs: RequestHandler = async (req: Request, res: Response) => {

        try {
            const allBlogs: UnitUser[] = await database.findAll();
            console.log('allBlogs:', allBlogs)
            if (!allBlogs.length) {
                return res.status(400).json({ msg: `No allBlogs at this time..` })
            }

            return res.status(200).json({
                status: 'status',
                message: 'class BlogController',
                data: 'Data',
                total_blogs: allBlogs.length,
                allBlogs
            })

        } catch (error) {
            return res.status(500).json({ error })
        }
    };

    public getFavourites: RequestHandler = async (req: Request, res: Response) => {

        try {
            // simulate the time to retrieve the user list
            await new Promise((resolve) => setTimeout(resolve, 250));
            const allBlogs: EnumServiceGetOrderBy | null = await database.findAllFavourites('34abc567');
            console.log('allBlogs:', allBlogs)
            if (!allBlogs) {
                return res.status(400).json({ msg: `No allBlogs at this time..` })
            }

            return res.status(200).json({
                status: 'status',
                message: 'class BlogController',
                data: 'Data',
                total_blogs: allBlogs,
                allBlogs
            })

        } catch (error) {
            return res.status(500).json({ error })
        }

    };

    static async createBlog(req: Request, res: Response) {
        /* 
                const { title, description, director, year, rating, image, cast } =
                    req.body;
                const movie = new Movie();
                movie.title = title;
                movie.description = description;
                movie.director = director;
                movie.year = year;
                movie.rating = rating;
                movie.image = image;
                movie.cast = cast;
                const movieRepository = AppDataSource.getRepository(Movie);
                await movieRepository.save(movie);
                return res
                    .status(200)
                    .json({ message: "Movie created successfully", movie });
                    */
    }

    static async updateBlog(req: Request, res: Response) {
        /* 
                const { id } = req.params;
                const { title, description, director, year, rating, image, cast } =
                    req.body;
                const movieRepository = AppDataSource.getRepository(Movie);
                const movie = await movieRepository.findOne({
                    where: { id },
                });
                movie.title = title;
                movie.description = description;
                movie.director = director;
                movie.year = year;
                movie.rating = rating;
                movie.image = image;
                movie.cast = cast;
                await movieRepository.save(movie);
                return res
                    .status(200)
                    .json({ message: "Movie updated successfully", movie });
                     */
    }

    static async deleteBlog(req: Request, res: Response) {
        /* 
                const { id } = req.params;
                const movieRepository = AppDataSource.getRepository(Movie);
                const movie = await movieRepository.findOne({
                    where: { id },
                });
                await movieRepository.remove(movie);
                return res
                    .status(200)
                    .json({ message: "Movie deleted successfully", movie });
                 */
    }
}

export const blogController = new BlogController();