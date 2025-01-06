import { Request, Response, RequestHandler, NextFunction } from 'express';

import url from 'url';
import querystring from 'querystring';

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

        try {
            const full_url_path = `${req.protocol}://${req.get('host')}${req.originalUrl}`,
                parse_url_path = url.parse(full_url_path),
                category_subcategory_info = querystring.parse(parse_url_path.query || ''),
                subcategory_id = category_subcategory_info['subcategory_id'],
                parse_url = new URL(full_url_path);

            //Print the url object.
            const urlObject = {
                "Href": parse_url.href,
                "Origin": parse_url.origin,
                "Protocol": parse_url.protocol,
                "Username": parse_url.username,
                "Password": parse_url.password,
                "Host": parse_url.host,
                "Hostname": parse_url.hostname,
                "Port": parse_url.port,
                "Pathname": parse_url.pathname,
                "Search": parse_url.search,
                "SearchParams": parse_url.searchParams,
                "Hash": parse_url.hash,
                "query_params": category_subcategory_info,
                "parse_url": parse_url,
                "data": (req as CustomRequest).request_data,
                "client_info": (req as CustomRequest).requestInfo
            }

            const databaseService = new DatabaseService(uri, dbName);

            const collections = await databaseService.readFromDatabase(req, res, next);

            console.log('db_connection_res:')
            res.status(200).json({
                data: collections,
                info: urlObject
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

    static async createMovie(req: Request, res: Response) {
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

    static async updateMovie(req: Request, res: Response) {
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

    static async deleteMovie(req: Request, res: Response) {
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