import app from "./server";
import dotenv from 'dotenv';
dotenv.config();
/* 

Error loading page
It looks like your internet connection is down. Please check it.

*/
interface ServerConnection {
  host: string;
  port: number;
}


const appConn: ServerConnection = {
  host: "localhost",
  port: 4000
};

const server = app.listen(appConn.port, () => {
  console.log(`Server (${'NODE_ENV'}) running on port http://${appConn.host}:${appConn.port}`);
});

['SIGINT', 'SIGTERM', 'SIGQUIT']
  .forEach(signal => process.on(signal, () => {
    server.close(() => {
      process.exit();
    });
    setTimeout(() => process.exit(1), 10000).unref(); // Force shutdown after 10s
  }));

  (async () => {
   console.log('dbCreateConnection:index:')
  })();


import { Collection, Db, Document, MongoClient } from "mongodb";
// get environment variables for database uri and database name

let uri = process.env.MONGODB_URI;
let dbName = process.env.MONGODB_DB;
let NODE_ENV = process.env.NODE_ENV;

console.log('uri:', uri)
console.log('dbName:', dbName)
console.log('NODE_ENV:', NODE_ENV)

// create cache variables so we can cache our connection
let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;
let collections: Record<string, Collection<Document>> | null = null;

// database connection function

async function connectToDatabase(): Promise<{
  client: MongoClient;
  db: Db;
  collections: Record<string, Collection<Document>>;
}> {
  // check for database connection string and db name
  if (!uri || !dbName) {
    throw new Error("No URI available for MongoDB connection");
  }
  // if have cached use it
  if (cachedClient && cachedDb && collections) {
    return { client: cachedClient, db: cachedDb, collections };
  }
  try {
    const client = await MongoClient.connect(uri);
    // connect to specific database
    const db = await client.db(dbName);
    // set cache
    cachedClient = client;
    cachedDb = db;
    collections = { category: db.collection("category") };
    db.collection("category").find({}).toArray().then((data) => {
      console.log("Data::", data);
    } );

    return { client, db, collections };
  } catch (e: any) {
    throw new Error(e?.message ?? e.toString());
  }
}

connectToDatabase().then(({ client, db, collections }) => {
  // console.log("Database connected::", db.databaseName);
  // console.log("Collections::", collections);  
  // do something with the database
  // close the connection

} ).catch((e) => {  
  console.error("Database connection error:", e);
} ).finally(() => { 
  // client.close();
  // console.log("Database connection closed");
 
  });


export { connectToDatabase };

