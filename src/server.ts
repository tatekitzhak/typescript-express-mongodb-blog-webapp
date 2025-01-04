import express, { type Express, Request, Response, NextFunction } from "express";

import { blogsRouter } from "./routes/blog.routes";

// import {errorHandler} from "./errors/errorHandler";

const app: Express = express();

// Set the application to trust the reverse proxy
// app.set("trust proxy", true);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/", blogsRouter);

app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        success: true,
        status: 'success',
        message: 'Welcome to the Blog API',
    });
});

// Error handlers
app.get('*', (req: Request, res: Response, next: NextFunction) => {
    console.log('404 Error')
    res.status(404).json({
        success: false,
        status: 'fail',
        message: 'Page Not Found',
    });
});

// DB CreateConnection 

(async () => {
    await console.log('dbCreateConnection:server:')
})();

export default app;


// cocnnecion to mongodb driver
// import { MongoClient } from 'mongodb';
// import { Db } from 'mongodb';
// import { MongoError } from 'mongodb';
// import { Server } from 'mongodb';
// import { Collection } from 'mongodb';
// import { Cursor } from 'mongodb';
// import { InsertOneResult } from 'mongodb';
// import { InsertWriteOpResult } from 'mongodb';
// import { UpdateWriteOpResult } from 'mongodb';
// import { DeleteWriteOpResultObject } from 'mongodb';

// const url = 'mongodb://localhost:27017';
// const dbName = 'myproject';

// MongoClient.connect(url, function(err, client) {
//   console.log("Connected successfully to server");

//   const db = client.db(dbName);

//   client.close();
// }
// );


