import { Request, Response, NextFunction } from 'express';
import { Database } from './database';
import { ConnectionConfig } from "../configs";


export class DatabaseService extends Database {
  constructor(uri: string, dbName?: string) {
    super(uri, dbName);
  }

  // is database exists
  async isDatabaseExists(mongoclient: any, dbName?: string): Promise<boolean> {
    const arrayOfDatabases = await this.listOfDatabases(mongoclient);
    return dbName ? arrayOfDatabases.includes(dbName) : false;
  }

  async readFromDatabase(req: Request, res: Response, next: NextFunction) {

    try {
      const { mongoclient, mongoclientDbPing } = await this.connectToDatabase(next);

      // if isDatabaseExists false next new Error message 
      if (!await this.isDatabaseExists(mongoclient, this.db_name)) {
        next(new Error(`Internal server error: missing something: ${this.db_name}`));
      }
      
      const db = mongoclient.db(this.db_name);
      // console.log('isDatabaseExists:', await this.isDatabaseExists(mongoclient, this.db_name))
      const collections = await db.collection("category").find({}).toArray()

      console.log('ping_res:', mongoclientDbPing)
      console.log('collections::', collections)

      return collections;
      
    } catch (error) {
      console.error(`No URI available for MongoDB connection: ${error}`);
      next(new Error(`Internal server error: We're missing something:`)); 
      
    }
    finally {
      // console.log("Database connection closed");
    }
   
  }


  // async findAllBlogs(): Promise<T[]> {
  //   return this.model.find().exec();
  // }

  // async findBlogById(id: string): Promise<T | null> {
  //   return this.model.findById(id).exec();
  // }
}

// const dbService = new DatabaseService('mongodb://localhost:27017');