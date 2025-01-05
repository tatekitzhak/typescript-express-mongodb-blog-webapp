import app from "./server";
import { ConnectionConfig } from "./configs";

/* 

Error loading page
It looks like your internet connection is down. Please check it.

*/

const appPort = ConnectionConfig.app['port'] as number;
const appHost = ConnectionConfig.app['host'] as string;

const server = app.listen(appPort, () => {
  console.log(`Server (${'NODE_ENV'}) running on port http://${appHost}:${appPort}`);
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