import dotenv from 'dotenv';
dotenv.config();

type ConnectionEnv = 'app' | 'db' | 'redis';

interface ConnectionInfo {
    [name: string]: string | number | undefined
};

export const ConnectionConfig: Record<ConnectionEnv, ConnectionInfo> = {
    "db": {
        uri: process.env.MONGODB_URI,
        dbName: process.env.MONGODB_DB
    },
    "redis": {
        host: process.env['REDIS_HOST'],
        port: process.env['REDIS_PORT'] //parseInt(process.env.REDIS_PORT)
    },
    "app": {
        host: process.env['APP_HOST'],
        port: process.env.APP_PORT //parseInt(process.env.APP_PORT)
    }
}