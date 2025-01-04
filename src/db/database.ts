import { Collection, Db, Document, MongoClient } from "mongodb";
// const { DatabaseConnectionError } = require('../utils/errorHandler/DatabaseError');
import { Request, Response, NextFunction } from 'express';

export class Database {
    private readonly URI: string;
    connected = false;

    constructor(uri: string, dbName?: string) {
        // console.log('db_env:', db_env)
        this.URI = `${ uri }`
        // this.dbName = '';
        // this.name = this.constructor.name;
        // this.client = ''
        console.log('Database URI:', this.URI)
  }

  async connect(req: Request, res: Response, next: NextFunction) {
    try {
/* 
      console.log(`Database connection status: ${this.connected}`);
      // Establish connection to 
      if (this.connected === false) {
        console.log('Trying database connection ...');
        const mongodb_client = new MongoClient(this.url);

        this.client = await mongodb_client.connect()
        this.connected = true;
        const ping_res = await this.client.db().admin().ping();
        console.log('Database connection successful, ping:', ping_res);
        return this.client;
      } else {
        console.log('Database already connected');
        return
      }
 */
    } catch (error: any) {

      if (process.env.NODE_ENV === "development") {
        console.error('\x1b[36m', `Error establishing a database connection`, '\x1b[0m', JSON.stringify(error));

        console.log('\x1b[36m', `Error Type:`, '\x1b[0m', error.name); // Error Type: in this case just Error
        console.log('\x1b[36m', ' Error Message:', '\x1b[0m', error.message); // Error Message: The string we’ve passed as an argument to the error constructor in the try block
        console.log('\x1b[36m', 'Error Stack: ', '\x1b[0m', error.stack)
      }
    //   next(new DatabaseConnectionError(error.name + ' ' + error.message, 505))

     
    }
  }

//   async disconnect() {
//     try {
//       await this.client.close();
//       console.log('Database connection closed');
//     } catch (error) {
//       console.error(`Error closing database connection: ${error}`);
//     }
//   }

//   async listDatabases(client) {
//     const databasesList = await client.db().admin().listDatabases();
//     let arrayOfDatabases = [];
//     console.log("--- Databases:-----");
//     await databasesList.databases.forEach((db) => {
//       console.log(` - ${db.name}`)
//       arrayOfDatabases.push(db.name)
//     });
//     return arrayOfDatabases;
//   };
}

// export const Database_ = new Database('mongodb://localhost:27017');