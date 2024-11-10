// src/app.ts
import express from 'express';
import router from './routes';
import bodyParser from 'body-parser';
import authRoutes from './routes/authRoutes';
import itemRoutes from './routes/itemRoutes';
import cors from 'cors';

const app = express();

// Enable CORS for all origins (you can also specify a specific origin here)
app.use(cors({
    origin: 'http://localhost:5173', // Allow requests only from your frontend URL
    methods: 'GET,POST,PUT,DELETE', // Allow these HTTP methods
    allowedHeaders: 'Content-Type,Authorization', // Allow these headers
}));

// Middleware setup
app.use(express.json());

// Use middleware to parse JSON bodies
app.use(bodyParser.json());

// Routes
app.use('/api/v1', router);
// Routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/items', itemRoutes);

export default app;
