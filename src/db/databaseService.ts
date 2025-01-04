import { Database }  from './database';

export class DatabaseService extends Database {
    constructor(uri: string) {
      super(uri);
    }

     async helloDatabaseService() {
        console.log('Hello DatabaseService');
    }
  
    // async findAllBlogs(): Promise<T[]> {
    //   return this.model.find().exec();
    // }
  
    // async findBlogById(id: string): Promise<T | null> {
    //   return this.model.findById(id).exec();
    // }
  }
  
// const dbService = new DatabaseService('mongodb://localhost:27017');