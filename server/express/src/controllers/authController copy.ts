import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import pool from '../db';
import bcrypt from 'bcrypt';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

type User = {
    id: number;
    email: string;
    password: string;
    // Add other user fields if any
};

export const login = async (req: Request, res: Response): Promise<void> => {
    // const { email, password } = req.body;
    const email = "john@example.com";
    const password = "hashed_password_123";
    try {
        const [rows]: [User[], any] = await pool.query('SELECT * FROM user WHERE email = ?', [email]) as [User[], any];
        // const [rows]: [User[], any] = await pool.query('SELECT * FROM user WHERE email = "john@example.com"') as [User[], any];

        if (rows.length === 0) {
            res.status(404).json({ message: `'User not found = ${email}'`, });
            return;
        }

        const user = rows[0];
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            res.status(401).json({ message: `'Invalid credentials = ${email}'` });
            return;
        }

        const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });

        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error });
    }
};

// Check if user is logged in (GET)
export const getLogin = async (req: Request, res: Response): Promise<void> => {
    res.json({ message: 'Login route success' });
    // res.send('Hello, world!');

};