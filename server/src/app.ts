import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import { corsOptions } from './config/cors.js';
import { connectDB } from './config/db.js';

// routes

// middleware
// import { errorHandler } from "./middleware/error.middleware.js";

const app = express();

/* ------------------------- CORE MIDDLEWARE ------------------------- */

// parse JSON bodies
app.use(express.json());

// parse cookies (httpOnly JWT)
app.use(cookieParser());

// CORS
app.use(cors(corsOptions));

/* ------------------------- ROUTES ------------------------- */
import healthRouter from './routes/health.route.js';
/* ------------------------- HEALTH CHECK ------------------------- */

app.use('/api', healthRouter);
/* ------------------------- ERROR HANDLING ------------------------- */

// app.use(errorHandler);

/* ------------------------- DB INIT ------------------------- */

// connect DB once, when app loads
connectDB();

export default app;
