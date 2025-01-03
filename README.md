# Structure of a Project: TypeScript, Node.js, Express and MongoDB Web Application

``` bash
|Domain                 | Method       | URI                                  | Action  | Name  |
|-----------------------|:------------:| ------------------------------------:| -------:|------:|
| http://localhost:3000 |GET           | /                                    |         |       |
|                       |GET           | /api                                 |         |       |
|                       |GET           | /api/blods                           |         |       |
|                       |GET           |/api/blod/:id                         |         |       |
|                       |GET           |/category/subcategory/topics/article  |         |       |  
```

``` bash
├── build
├── src
│   ├── configsEnv
│   │   ├── mongoDB.ts
│   │   ├── redis.ts
│   │   └── NativeEvent.ts
│   ├── controllers
│   │   ├── Api
│   │   │   ├── Auth
│   │   │   │   ├── Login.ts
│   │   │   │   ├── RefreshToken.ts
│   │   │   │   └── Register.ts
│   │   │   └── Home.ts
│   │   ├── Auth
│   │   │   ├── Login.ts
│   │   │   ├── Logout.ts
│   │   │   ├── Register.ts
│   │   │   └── Social.ts
│   │   ├── Account.ts
│   │   └── Home.ts
│   ├── database 
│   │   ├── Database.ts
│   │   └── NativeEvent.ts
│   ├── exception 
│   │   ├── Handler.ts
│   │   └── NativeEvent.ts
│   ├── interfaces
│   │   ├── models
│   │   │   └── Schema.ts
│   │   └── vendors
│   │        ├── index.ts
│   │        ├── INext.ts
│   │        ├── IRequest.ts
│   │        └── IResponse.ts
│   ├── middlewares
│   │   ├── CORS.ts
│   │   ├── CsrfToken.ts
│   │   ├── Http.ts
│   │   ├── Kernel.ts
│   │   ├── Log.ts
│   │   ├── Statics.ts
│   │   ├── StatusMonitor.ts
│   │   └── View.ts
│   ├── models
│   │   └── User.ts
│   ├── providers
│   │   ├── App.ts
│   │   ├── Cache.ts
│   │   ├── Database.ts
│   │   ├── Express.ts
│   │   ├── Locals.ts
│   │   ├── Passport.ts
│   │   ├── Queue.ts
│   │   └── Routes.ts
│   ├── routes
│   │   ├── Api.ts
│   │   └── Web.ts
│   ├── services
│   │   └── strategies
│   │        ├── Google.ts
│   │        ├── Local.ts
│   │        └── Twitter.ts
│   └── index.ts
├── .dockerignore
├── .env
├── .eslintrc 
├── .gitignore 
├── Dockerfile
├── docker-compose.yml
├── nodemon.json
├── package.json
├── README.md
├── tsconfig.json
└── tslint.json
```

# Remove and clean dependencies
- `rm -rf ./**/node_modules`
- `npm cache verify`
- `npm cache clean`
- `npm cache clean -f`
- `rm -rf node_modules`
- `rm package-lock.json`
- `rm -rf package-lock.json`
