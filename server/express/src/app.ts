// src/app.ts
import express from 'express';
import router from './routes';
import bodyParser from 'body-parser';
import authRoutes from './routes/authRoutes';
import itemRoutes from './routes/itemRoutes';

const app = express();

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
