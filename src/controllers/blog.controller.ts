import { Request, Response, RequestHandler } from 'express';

import { DatabaseService } from '../db/databaseService';

import { connectToDatabase } from '../db/dbConnection';
import * as database from "../blogs/blogs.database";
import { UnitUser, EnumServiceGetOrderBy } from "../blogs/blog.interface";


connectToDatabase().then(({ mongoclient, db, collections }) => {
    console.log("Database connected::", db.databaseName);
    // console.log("Collections::", collections);  
    // do something with the database
    const datatbase = mongoclient.db('convertxt3');
    const collections1 = datatbase.collection("category").find({}).toArray().then((data) => {
        //console.log("Data::", data);
        return data;
    });
    console.log("Collections::", collections1);

}).catch((e) => {
    console.error("Database connection error::", e);
}).finally(() => {
    // client.close();
    // console.log("Database connection closed");

});


export class BlogController {

    static getBlog(req: Request, res: Response) {

        const helloDatabaseService = new DatabaseService('mongodb://localhost:27017');
        helloDatabaseService.helloDatabaseService();
        return res.status(200).json({
            data: 'helloDatabaseService'
        });
        /* 
                const data = cache.get("data");
                if (data) {
                  console.log("serving from cache");
                  return res.status(200).json({
                    data,
                  });
                  
                } else {
                  console.log("serving from db");
                  const movieRepository = AppDataSource.getRepository(Movie);
                  const movies = await movieRepository.find();
                  cache.put("data", movies, 10000);
                  return res.status(200).json({
                    data: movies,
                  });
                }
             */
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