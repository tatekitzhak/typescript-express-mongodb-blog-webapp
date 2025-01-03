"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogsController = exports.blogController = void 0;
const tslib_1 = require("tslib");
const database = tslib_1.__importStar(require("../blogs/blogs.database"));
class BlogController {
    constructor() {
        this.getAllBlogs = (_req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const allBlogs = yield database.findAll();
                console.log('allBlogs:', allBlogs);
                if (!allBlogs.length) {
                    return res.status(400).json({ msg: `No allBlogs at this time..` });
                }
                return res.status(200).json({
                    status: 'status',
                    message: 'class BlogController',
                    data: 'Data',
                    total_blogs: allBlogs.length,
                    allBlogs
                });
            }
            catch (error) {
                return res.status(500).json({ error });
            }
        });
        this.getFavourites = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                // simulate the time to retrieve the user list
                yield new Promise((resolve) => setTimeout(resolve, 250));
                const allBlogs = yield database.findAllFavourites('34abc567');
                console.log('allBlogs:', allBlogs);
                if (!allBlogs) {
                    return res.status(400).json({ msg: `No allBlogs at this time..` });
                }
                return res.status(200).json({
                    status: 'status',
                    message: 'class BlogController',
                    data: 'Data',
                    total_blogs: allBlogs,
                    allBlogs
                });
            }
            catch (error) {
                return res.status(500).json({ error });
            }
        });
    }
}
exports.blogController = new BlogController();
const blogsController = (req, res, next) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const allBlogs = yield database.findAll();
        if (!allBlogs) {
            return res.status(400).json({ msg: `No allBlogs at this time..` });
        }
        return res.status(200).json({
            status: 'status',
            message: 'message',
            data: 'function blogsController',
            total_blogs: allBlogs.length,
            allBlogs
        });
    }
    catch (error) {
        return res.status(500).json({ error });
    }
});
exports.blogsController = blogsController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvZ3NDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FwaS9ibG9nc0NvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLDBFQUFvRDtBQUlwRCxNQUFNLGNBQWM7SUFBcEI7UUFDUyxnQkFBVyxHQUFtQixDQUFPLElBQWEsRUFBRSxHQUFhLEVBQUUsRUFBRTtZQUUxRSxJQUFJLENBQUM7Z0JBQ0QsTUFBTSxRQUFRLEdBQWdCLE1BQU0sUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUN2RCxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQTtnQkFDbEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztvQkFDbkIsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLEdBQUcsRUFBRyw0QkFBNEIsRUFBQyxDQUFDLENBQUE7Z0JBQ3JFLENBQUM7Z0JBRUQsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDeEIsTUFBTSxFQUFFLFFBQVE7b0JBQ2hCLE9BQU8sRUFBRSxzQkFBc0I7b0JBQy9CLElBQUksRUFBRSxNQUFNO29CQUNaLFdBQVcsRUFBRyxRQUFRLENBQUMsTUFBTTtvQkFDN0IsUUFBUTtpQkFDWCxDQUFDLENBQUE7WUFFTixDQUFDO1lBQUMsT0FBTyxLQUFLLEVBQUUsQ0FBQztnQkFDYixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQTtZQUN4QyxDQUFDO1FBQ0gsQ0FBQyxDQUFBLENBQUM7UUFFSyxrQkFBYSxHQUFtQixDQUFPLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtZQUUzRSxJQUFJLENBQUM7Z0JBQ0QsOENBQThDO2dCQUM5QyxNQUFNLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pELE1BQU0sUUFBUSxHQUFrQyxNQUFNLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDN0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUE7Z0JBQ2xDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDWixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsR0FBRyxFQUFHLDRCQUE0QixFQUFDLENBQUMsQ0FBQTtnQkFDckUsQ0FBQztnQkFFRCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUN4QixNQUFNLEVBQUUsUUFBUTtvQkFDaEIsT0FBTyxFQUFFLHNCQUFzQjtvQkFDL0IsSUFBSSxFQUFFLE1BQU07b0JBQ1osV0FBVyxFQUFHLFFBQVE7b0JBQ3RCLFFBQVE7aUJBQ1gsQ0FBQyxDQUFBO1lBRU4sQ0FBQztZQUFDLE9BQU8sS0FBSyxFQUFFLENBQUM7Z0JBQ2IsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLENBQUE7WUFDeEMsQ0FBQztRQUVILENBQUMsQ0FBQSxDQUFDO0lBQ0osQ0FBQztDQUFBO0FBSVksUUFBQSxjQUFjLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQztBQUc1QyxNQUFNLGVBQWUsR0FBRyxDQUFPLEdBQVksRUFBRSxHQUFhLEVBQUUsSUFBa0IsRUFBRSxFQUFFO0lBQ3JGLElBQUksQ0FBQztRQUNELE1BQU0sUUFBUSxHQUFnQixNQUFNLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtRQUV0RCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDWixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsR0FBRyxFQUFHLDRCQUE0QixFQUFDLENBQUMsQ0FBQTtRQUNyRSxDQUFDO1FBRUQsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUN4QixNQUFNLEVBQUUsUUFBUTtZQUNoQixPQUFPLEVBQUUsU0FBUztZQUNsQixJQUFJLEVBQUUsMEJBQTBCO1lBQ2hDLFdBQVcsRUFBRyxRQUFRLENBQUMsTUFBTTtZQUM3QixRQUFRO1NBQ1gsQ0FBQyxDQUFBO0lBRU4sQ0FBQztJQUFDLE9BQU8sS0FBSyxFQUFFLENBQUM7UUFDYixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQTtJQUN4QyxDQUFDO0FBQ0wsQ0FBQyxDQUFBLENBQUE7QUFuQlksUUFBQSxlQUFlLG1CQW1CM0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcywgeyBBcHBsaWNhdGlvbiwgUmVxdWVzdCwgUmVzcG9uc2UsIFJlcXVlc3RIYW5kbGVyLCBOZXh0RnVuY3Rpb24gfSBmcm9tICdleHByZXNzJztcblxuXG5pbXBvcnQgKiBhcyBkYXRhYmFzZSBmcm9tIFwiLi4vYmxvZ3MvYmxvZ3MuZGF0YWJhc2VcIjtcbmltcG9ydCB7IFVuaXRVc2VyLCBFbnVtU2VydmljZUdldE9yZGVyQnkgfSBmcm9tIFwiLi4vYmxvZ3MvYmxvZy5pbnRlcmZhY2VcIjtcblxuXG5jbGFzcyBCbG9nQ29udHJvbGxlciB7XG4gIHB1YmxpYyBnZXRBbGxCbG9nczogUmVxdWVzdEhhbmRsZXIgPSBhc3luYyAoX3JlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuICAgIFxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGFsbEJsb2dzIDogVW5pdFVzZXJbXSA9IGF3YWl0IGRhdGFiYXNlLmZpbmRBbGwoKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2FsbEJsb2dzOicsIGFsbEJsb2dzKVxuICAgICAgICBpZiAoIWFsbEJsb2dzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHttc2cgOiBgTm8gYWxsQmxvZ3MgYXQgdGhpcyB0aW1lLi5gfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgICAgICAgICBzdGF0dXM6ICdzdGF0dXMnLFxuICAgICAgICAgICAgbWVzc2FnZTogJ2NsYXNzIEJsb2dDb250cm9sbGVyJyxcbiAgICAgICAgICAgIGRhdGE6ICdEYXRhJyxcbiAgICAgICAgICAgIHRvdGFsX2Jsb2dzIDogYWxsQmxvZ3MubGVuZ3RoLCBcbiAgICAgICAgICAgIGFsbEJsb2dzXG4gICAgICAgIH0pXG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oe2Vycm9yfSlcbiAgICB9XG4gIH07XG5cbiAgcHVibGljIGdldEZhdm91cml0ZXM6IFJlcXVlc3RIYW5kbGVyID0gYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuICAgIFxuICAgIHRyeSB7XG4gICAgICAgIC8vIHNpbXVsYXRlIHRoZSB0aW1lIHRvIHJldHJpZXZlIHRoZSB1c2VyIGxpc3RcbiAgICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMjUwKSk7XG4gICAgICAgIGNvbnN0IGFsbEJsb2dzIDogRW51bVNlcnZpY2VHZXRPcmRlckJ5IHwgbnVsbCA9IGF3YWl0IGRhdGFiYXNlLmZpbmRBbGxGYXZvdXJpdGVzKCczNGFiYzU2NycpO1xuICAgICAgICBjb25zb2xlLmxvZygnYWxsQmxvZ3M6JywgYWxsQmxvZ3MpXG4gICAgICAgIGlmICghYWxsQmxvZ3MpIHtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7bXNnIDogYE5vIGFsbEJsb2dzIGF0IHRoaXMgdGltZS4uYH0pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgICAgICAgc3RhdHVzOiAnc3RhdHVzJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdjbGFzcyBCbG9nQ29udHJvbGxlcicsXG4gICAgICAgICAgICBkYXRhOiAnRGF0YScsXG4gICAgICAgICAgICB0b3RhbF9ibG9ncyA6IGFsbEJsb2dzLCBcbiAgICAgICAgICAgIGFsbEJsb2dzXG4gICAgICAgIH0pXG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oe2Vycm9yfSlcbiAgICB9XG5cbiAgfTtcbn1cblxuXG5cbmV4cG9ydCBjb25zdCBibG9nQ29udHJvbGxlciA9IG5ldyBCbG9nQ29udHJvbGxlcigpO1xuXG5cbmV4cG9ydCBjb25zdCBibG9nc0NvbnRyb2xsZXIgPSBhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pID0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBhbGxCbG9ncyA6IFVuaXRVc2VyW10gPSBhd2FpdCBkYXRhYmFzZS5maW5kQWxsKClcblxuICAgICAgICBpZiAoIWFsbEJsb2dzKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe21zZyA6IGBObyBhbGxCbG9ncyBhdCB0aGlzIHRpbWUuLmB9KVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICAgICAgICAgIHN0YXR1czogJ3N0YXR1cycsXG4gICAgICAgICAgICBtZXNzYWdlOiAnbWVzc2FnZScsXG4gICAgICAgICAgICBkYXRhOiAnZnVuY3Rpb24gYmxvZ3NDb250cm9sbGVyJyxcbiAgICAgICAgICAgIHRvdGFsX2Jsb2dzIDogYWxsQmxvZ3MubGVuZ3RoLCBcbiAgICAgICAgICAgIGFsbEJsb2dzXG4gICAgICAgIH0pXG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oe2Vycm9yfSlcbiAgICB9XG59Il19