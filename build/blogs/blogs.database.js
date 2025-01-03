"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAllFavourites = exports.findAll = void 0;
const tslib_1 = require("tslib");
function loadBlogs() {
    try {
        return JSON.parse('{"result":true, "count":42, "user":{ "name":"John", "age":30, "city":"New York"}}');
    }
    catch (error) {
        console.log(`Error:: ${error}`);
        return {};
    }
}
let blogs = loadBlogs();
const findAll = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () { return Object.values(blogs); });
exports.findAll = findAll;
// make try catch function by user list retrieved with a query the following object: [{ id: 1, email: "john.doe@example.com", name: "John Doe" },{ id: 2, email: "jane.smith@example.com", name: "Jane Smith" }]
const findAllFavourites = (id) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        let users = [
            { id: 1, email: "john.doe@example.com", name: "John Doe" },
            { id: 2, email: "jane.smith@example.com", name: "Jane Smith" },
            { id: 3, email: "alice.jones@example.com", name: "Alice Jones" },
            { id: 4, email: "bob.miller@example.com", name: "Bob Miller" },
            { id: 5, email: "sara.white@example.com", name: "Sara White" },
            { id: 6, email: "mike.jenkins@example.com", name: "Mike Jenkins" },
            { id: 7, email: "emily.clark@example.com", name: "Emily Clark" },
            { id: 8, email: "david.ross@example.com", name: "David Ross" },
            { id: 9, email: "lisa.hall@example.com", name: "Lisa Hall" },
            { id: 10, email: "alex.garcia@example.com", name: "Alex Garcia" },
        ];
        return users;
    }
    catch (error) {
        console.log(`Error:: ${error}`);
        return null;
    }
});
exports.findAllFavourites = findAllFavourites;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvZ3MuZGF0YWJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYmxvZ3MvYmxvZ3MuZGF0YWJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUlBLFNBQVMsU0FBUztJQUNoQixJQUFJLENBQUM7UUFDSCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsbUZBQW1GLENBQUMsQ0FBQTtJQUN4RyxDQUFDO0lBQUMsT0FBTyxLQUFLLEVBQUUsQ0FBQztRQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxLQUFLLEVBQUUsQ0FBQyxDQUFBO1FBQy9CLE9BQU8sRUFBRSxDQUFBO0lBQ1gsQ0FBQztBQUNILENBQUM7QUFFRCxJQUFJLEtBQUssR0FBVSxTQUFTLEVBQUUsQ0FBQTtBQUV2QixNQUFNLE9BQU8sR0FBRyxHQUE4QixFQUFFLDBEQUFDLE9BQUEsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQSxHQUFBLENBQUM7QUFBaEUsUUFBQSxPQUFPLFdBQXlEO0FBRTdFLGdOQUFnTjtBQUN6TSxNQUFNLGlCQUFpQixHQUFHLENBQU8sRUFBVSxFQUF5QyxFQUFFO0lBQzNGLElBQUksQ0FBQztRQUVILElBQUksS0FBSyxHQUF5QjtZQUM5QixFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLHNCQUFzQixFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7WUFDMUQsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSx3QkFBd0IsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFO1lBQzlELEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUseUJBQXlCLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRTtZQUNoRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLHdCQUF3QixFQUFFLElBQUksRUFBRSxZQUFZLEVBQUU7WUFDOUQsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSx3QkFBd0IsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFO1lBQzlELEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsMEJBQTBCLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRTtZQUNsRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLHlCQUF5QixFQUFFLElBQUksRUFBRSxhQUFhLEVBQUU7WUFDaEUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSx3QkFBd0IsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFO1lBQzlELEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtZQUM1RCxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLHlCQUF5QixFQUFFLElBQUksRUFBRSxhQUFhLEVBQUU7U0FDbEUsQ0FBQztRQUVKLE9BQU8sS0FBSyxDQUFBO0lBRWQsQ0FBQztJQUFDLE9BQU8sS0FBSyxFQUFFLENBQUM7UUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsS0FBSyxFQUFFLENBQUMsQ0FBQTtRQUMvQixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7QUFDSCxDQUFDLENBQUEsQ0FBQztBQXRCVyxRQUFBLGlCQUFpQixxQkFzQjVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVXNlciwgVW5pdFVzZXIsIFVzZXJzLCBFbnVtU2VydmljZUl0ZW1zLCBFbnVtU2VydmljZUdldE9yZGVyQnkgfSBmcm9tIFwiLi9ibG9nLmludGVyZmFjZVwiO1xuXG5cblxuZnVuY3Rpb24gbG9hZEJsb2dzICgpIDogVXNlcnMge1xuICB0cnkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKCd7XCJyZXN1bHRcIjp0cnVlLCBcImNvdW50XCI6NDIsIFwidXNlclwiOnsgXCJuYW1lXCI6XCJKb2huXCIsIFwiYWdlXCI6MzAsIFwiY2l0eVwiOlwiTmV3IFlvcmtcIn19JylcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhgRXJyb3I6OiAke2Vycm9yfWApXG4gICAgcmV0dXJuIHt9XG4gIH1cbn1cblxubGV0IGJsb2dzOiBVc2VycyA9IGxvYWRCbG9ncygpIFxuXG5leHBvcnQgY29uc3QgZmluZEFsbCA9IGFzeW5jICgpOiBQcm9taXNlPFVuaXRVc2VyW10+ID0+IE9iamVjdC52YWx1ZXMoYmxvZ3MpO1xuXG4vLyBtYWtlIHRyeSBjYXRjaCBmdW5jdGlvbiBieSB1c2VyIGxpc3QgcmV0cmlldmVkIHdpdGggYSBxdWVyeSB0aGUgZm9sbG93aW5nIG9iamVjdDogW3sgaWQ6IDEsIGVtYWlsOiBcImpvaG4uZG9lQGV4YW1wbGUuY29tXCIsIG5hbWU6IFwiSm9obiBEb2VcIiB9LHsgaWQ6IDIsIGVtYWlsOiBcImphbmUuc21pdGhAZXhhbXBsZS5jb21cIiwgbmFtZTogXCJKYW5lIFNtaXRoXCIgfV1cbmV4cG9ydCBjb25zdCBmaW5kQWxsRmF2b3VyaXRlcyA9IGFzeW5jIChpZDogc3RyaW5nKTogUHJvbWlzZTxFbnVtU2VydmljZUdldE9yZGVyQnkgfCBudWxsPiA9PiB7XG4gIHRyeSB7XG5cbiAgICBsZXQgdXNlcnM6RW51bVNlcnZpY2VHZXRPcmRlckJ5ID0gW1xuICAgICAgICB7IGlkOiAxLCBlbWFpbDogXCJqb2huLmRvZUBleGFtcGxlLmNvbVwiLCBuYW1lOiBcIkpvaG4gRG9lXCIgfSxcbiAgICAgICAgeyBpZDogMiwgZW1haWw6IFwiamFuZS5zbWl0aEBleGFtcGxlLmNvbVwiLCBuYW1lOiBcIkphbmUgU21pdGhcIiB9LFxuICAgICAgICB7IGlkOiAzLCBlbWFpbDogXCJhbGljZS5qb25lc0BleGFtcGxlLmNvbVwiLCBuYW1lOiBcIkFsaWNlIEpvbmVzXCIgfSxcbiAgICAgICAgeyBpZDogNCwgZW1haWw6IFwiYm9iLm1pbGxlckBleGFtcGxlLmNvbVwiLCBuYW1lOiBcIkJvYiBNaWxsZXJcIiB9LFxuICAgICAgICB7IGlkOiA1LCBlbWFpbDogXCJzYXJhLndoaXRlQGV4YW1wbGUuY29tXCIsIG5hbWU6IFwiU2FyYSBXaGl0ZVwiIH0sXG4gICAgICAgIHsgaWQ6IDYsIGVtYWlsOiBcIm1pa2UuamVua2luc0BleGFtcGxlLmNvbVwiLCBuYW1lOiBcIk1pa2UgSmVua2luc1wiIH0sXG4gICAgICAgIHsgaWQ6IDcsIGVtYWlsOiBcImVtaWx5LmNsYXJrQGV4YW1wbGUuY29tXCIsIG5hbWU6IFwiRW1pbHkgQ2xhcmtcIiB9LFxuICAgICAgICB7IGlkOiA4LCBlbWFpbDogXCJkYXZpZC5yb3NzQGV4YW1wbGUuY29tXCIsIG5hbWU6IFwiRGF2aWQgUm9zc1wiIH0sXG4gICAgICAgIHsgaWQ6IDksIGVtYWlsOiBcImxpc2EuaGFsbEBleGFtcGxlLmNvbVwiLCBuYW1lOiBcIkxpc2EgSGFsbFwiIH0sXG4gICAgICAgIHsgaWQ6IDEwLCBlbWFpbDogXCJhbGV4LmdhcmNpYUBleGFtcGxlLmNvbVwiLCBuYW1lOiBcIkFsZXggR2FyY2lhXCIgfSxcbiAgICAgIF07XG4gIFxuICAgIHJldHVybiB1c2Vyc1xuXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coYEVycm9yOjogJHtlcnJvcn1gKVxuICAgIHJldHVybiBudWxsO1xuICB9XG59O1xuXG5cblxuXG5cblxuXG4iXX0=