import cors from "cors";

const allowedOrigins = ['http://localhost:3000', 'http://localhost:8080'];

export const corsOptions: cors.CorsOptions = {
  origin: ['http://localhost:3000', 'http://localhost:8080'],
  credentials: true,            //access-control-allow-credentials:true
  optionsSuccessStatus: 200,
  methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
};

// export default corsOptions;
