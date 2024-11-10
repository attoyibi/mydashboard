// src/routes/index.ts
import { Router, Request, Response } from 'express';
import pool from '../db';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send('Hello, world!');
});
router.get('/users', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM user');  // Adjust `users` to match your table name
        res.json(rows);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Database query error' });
    }
});
export default router;
