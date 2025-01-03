"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const error_1 = require("./error");
// error handler middleware
const errorHandler = (err, req, res, next) => {
    console.log('errorHandler::::::');
    if (err instanceof error_1.ValidationError) {
        return res.status(err.status).json({
            status: 'fail',
            message: err.message,
            data: err.errorData
        });
    }
    else if (err instanceof error_1.BaseError) {
        if (err.isOperational) {
            return res.status(err.status).json({
                status: err.status < 500 && err.status >= 400 ? 'fail' : 'error',
                message: err.message
            });
            // 
        }
        else {
            // log the error
            console.log('log the error:');
            // send generic error message
            return res.status(err.status).json({
                status: 'error',
                message: 'Something went wrong'
            });
        }
    }
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3JIYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Vycm9ycy9lcnJvckhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsbUNBQXFEO0FBRXJELDJCQUEyQjtBQUNwQixNQUFNLFlBQVksR0FBRyxDQUFDLEdBQVUsRUFBRSxHQUFZLEVBQUUsR0FBYSxFQUFFLElBQWtCLEVBQUUsRUFBRTtJQUN4RixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUE7SUFDakMsSUFBRyxHQUFHLFlBQVksdUJBQWUsRUFBRSxDQUFDO1FBRWhDLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQy9CLE1BQU0sRUFBRSxNQUFNO1lBQ2QsT0FBTyxFQUFFLEdBQUcsQ0FBQyxPQUFPO1lBQ3BCLElBQUksRUFBRSxHQUFHLENBQUMsU0FBUztTQUN0QixDQUFDLENBQUE7SUFFTixDQUFDO1NBQU0sSUFBSSxHQUFHLFlBQVksaUJBQVMsRUFBRSxDQUFDO1FBQ3RDLElBQUksR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBRXBCLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUMvQixNQUFNLEVBQUUsR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLE1BQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUEsT0FBTztnQkFDL0QsT0FBTyxFQUFFLEdBQUcsQ0FBQyxPQUFPO2FBQ3ZCLENBQUMsQ0FBQTtZQUNGLEdBQUc7UUFDUCxDQUFDO2FBQU0sQ0FBQztZQUNKLGdCQUFnQjtZQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUE7WUFDN0IsNkJBQTZCO1lBQzdCLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUMvQixNQUFNLEVBQUUsT0FBTztnQkFDZixPQUFPLEVBQUUsc0JBQXNCO2FBQ2xDLENBQUMsQ0FBQTtRQUVOLENBQUM7SUFDRCxDQUFDO0FBQ0wsQ0FBQyxDQUFBO0FBN0JZLFFBQUEsWUFBWSxnQkE2QnhCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MsIHsgQXBwbGljYXRpb24sIFJlcXVlc3QsIFJlc3BvbnNlLCBOZXh0RnVuY3Rpb24gfSBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IEJhc2VFcnJvciwgVmFsaWRhdGlvbkVycm9yIH0gZnJvbSAnLi9lcnJvcic7XG5cbi8vIGVycm9yIGhhbmRsZXIgbWlkZGxld2FyZVxuZXhwb3J0IGNvbnN0IGVycm9ySGFuZGxlciA9IChlcnI6IEVycm9yLCByZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdlcnJvckhhbmRsZXI6Ojo6OjonKVxuICAgIGlmKGVyciBpbnN0YW5jZW9mIFZhbGlkYXRpb25FcnJvcikge1xuXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKGVyci5zdGF0dXMpLmpzb24oe1xuICAgICAgICAgICAgc3RhdHVzOiAnZmFpbCcsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnIubWVzc2FnZSxcbiAgICAgICAgICAgIGRhdGE6IGVyci5lcnJvckRhdGFcbiAgICAgICAgfSlcblxuICAgIH0gZWxzZSBpZiAoZXJyIGluc3RhbmNlb2YgQmFzZUVycm9yKSB7XG4gICAgaWYoIGVyci5pc09wZXJhdGlvbmFsKSB7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyhlcnIuc3RhdHVzKS5qc29uKHtcbiAgICAgICAgICAgIHN0YXR1czogZXJyLnN0YXR1cyA8IDUwMCAmJiBlcnIuc3RhdHVzID49IDQwMCA/ICdmYWlsJyA6J2Vycm9yJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVyci5tZXNzYWdlXG4gICAgICAgIH0pXG4gICAgICAgIC8vIFxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGxvZyB0aGUgZXJyb3JcbiAgICAgICAgY29uc29sZS5sb2coJ2xvZyB0aGUgZXJyb3I6JylcbiAgICAgICAgLy8gc2VuZCBnZW5lcmljIGVycm9yIG1lc3NhZ2VcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoZXJyLnN0YXR1cykuanNvbih7XG4gICAgICAgICAgICBzdGF0dXM6ICdlcnJvcicsXG4gICAgICAgICAgICBtZXNzYWdlOiAnU29tZXRoaW5nIHdlbnQgd3JvbmcnXG4gICAgICAgIH0pXG5cbiAgICB9XG4gICAgfVxufSJdfQ==