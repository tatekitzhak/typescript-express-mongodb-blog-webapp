"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
// import { healthCheckRouter } from "@/api/healthCheck/healthCheckRouter";
// import { userRouter } from "@/api/user/userRouter";
const blogsRouter_1 = require("./api/blogsRouter");
// import errorHandler from "@/common/middleware/errorHandler";
// import rateLimiter from "@/common/middleware/rateLimiter";
// import {errorHandler} from "./errors/errorHandler";
const app = (0, express_1.default)();
// Set the application to trust the reverse proxy
// app.set("trust proxy", true);
// Middlewares
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// app.use(rateLimiter);
// Routes
// app.use("/health-check", healthCheckRouter);
app.use("/", blogsRouter_1.blogsRouter);
/// ErrorHandler.js
const errorHandler = (req, res, next) => {
    console.log('404 Error');
    res.status(404).json({
        success: false,
        status: 'fail',
        message: 'Page Not Found'
    });
};
// Error handlers
app.use('*', errorHandler);
exports.default = app;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3NlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4REFBaUY7QUFFakYsMkVBQTJFO0FBQzNFLHNEQUFzRDtBQUN0RCxtREFBZ0Q7QUFFaEQsK0RBQStEO0FBQy9ELDZEQUE2RDtBQUU3RCxzREFBc0Q7QUFFdEQsTUFBTSxHQUFHLEdBQVksSUFBQSxpQkFBTyxHQUFFLENBQUM7QUFFL0IsaURBQWlEO0FBQ2pELGdDQUFnQztBQUVoQyxjQUFjO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7QUFDeEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDaEQsd0JBQXdCO0FBRXhCLFNBQVM7QUFDVCwrQ0FBK0M7QUFDL0MsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUseUJBQVcsQ0FBQyxDQUFDO0FBRzFCLG1CQUFtQjtBQUNuQixNQUFNLFlBQVksR0FBRyxDQUFDLEdBQVksRUFBRSxHQUFhLEVBQUUsSUFBa0IsRUFBRSxFQUFFO0lBQ3JFLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDeEIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDakIsT0FBTyxFQUFFLEtBQUs7UUFDZCxNQUFNLEVBQUUsTUFBTTtRQUNkLE9BQU8sRUFBRSxnQkFBZ0I7S0FDNUIsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFBO0FBRUQsaUJBQWlCO0FBQ2pCLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFlBQVksQ0FBQyxDQUFDO0FBRzNCLGtCQUFlLEdBQUcsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzLCB7IHR5cGUgRXhwcmVzcywgUmVxdWVzdCwgUmVzcG9uc2UsIE5leHRGdW5jdGlvbiB9IGZyb20gXCJleHByZXNzXCI7XG5cbi8vIGltcG9ydCB7IGhlYWx0aENoZWNrUm91dGVyIH0gZnJvbSBcIkAvYXBpL2hlYWx0aENoZWNrL2hlYWx0aENoZWNrUm91dGVyXCI7XG4vLyBpbXBvcnQgeyB1c2VyUm91dGVyIH0gZnJvbSBcIkAvYXBpL3VzZXIvdXNlclJvdXRlclwiO1xuaW1wb3J0IHsgYmxvZ3NSb3V0ZXIgfSBmcm9tIFwiLi9hcGkvYmxvZ3NSb3V0ZXJcIjtcblxuLy8gaW1wb3J0IGVycm9ySGFuZGxlciBmcm9tIFwiQC9jb21tb24vbWlkZGxld2FyZS9lcnJvckhhbmRsZXJcIjtcbi8vIGltcG9ydCByYXRlTGltaXRlciBmcm9tIFwiQC9jb21tb24vbWlkZGxld2FyZS9yYXRlTGltaXRlclwiO1xuXG4vLyBpbXBvcnQge2Vycm9ySGFuZGxlcn0gZnJvbSBcIi4vZXJyb3JzL2Vycm9ySGFuZGxlclwiO1xuXG5jb25zdCBhcHA6IEV4cHJlc3MgPSBleHByZXNzKCk7XG5cbi8vIFNldCB0aGUgYXBwbGljYXRpb24gdG8gdHJ1c3QgdGhlIHJldmVyc2UgcHJveHlcbi8vIGFwcC5zZXQoXCJ0cnVzdCBwcm94eVwiLCB0cnVlKTtcblxuLy8gTWlkZGxld2FyZXNcbmFwcC51c2UoZXhwcmVzcy5qc29uKCkpO1xuYXBwLnVzZShleHByZXNzLnVybGVuY29kZWQoeyBleHRlbmRlZDogdHJ1ZSB9KSk7XG4vLyBhcHAudXNlKHJhdGVMaW1pdGVyKTtcblxuLy8gUm91dGVzXG4vLyBhcHAudXNlKFwiL2hlYWx0aC1jaGVja1wiLCBoZWFsdGhDaGVja1JvdXRlcik7XG5hcHAudXNlKFwiL1wiLCBibG9nc1JvdXRlcik7XG5cblxuLy8vIEVycm9ySGFuZGxlci5qc1xuY29uc3QgZXJyb3JIYW5kbGVyID0gKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKSA9PiB7XG4gICAgY29uc29sZS5sb2coJzQwNCBFcnJvcicpXG4gICAgcmVzLnN0YXR1cyg0MDQpLmpzb24oe1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgc3RhdHVzOiAnZmFpbCcsXG4gICAgICAgIG1lc3NhZ2U6ICdQYWdlIE5vdCBGb3VuZCdcbiAgICB9KTtcbn1cblxuLy8gRXJyb3IgaGFuZGxlcnNcbmFwcC51c2UoJyonLCBlcnJvckhhbmRsZXIpO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGFwcDsiXX0=