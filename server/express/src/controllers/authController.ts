import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import pool from '../db';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

type User = {
    id: number;
    email: string;
    password: string;
    // Add other user fields if any
};

export const login = async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;
    // const email = "john@example.com";
    // const password = "hashed_password_123";
    // const email = "john"
    console.log(`Received login request for email:`, email);  // Log incoming email for login attempt
    console.log('Request body:', req.body);  // Log the entire body to see if the email exists
    // Validate input
    if (!email || !password) {
        res.status(400).json({ message: 'Email and password are required' });
        return;
    }
    try {
        // Query the database for the user by email
        const [rows]: [User[], any] = await pool.query('SELECT * FROM user WHERE email = ?', [email]) as [User[], any];

        console.log('Database query result:', rows);  // Log the result of the database query

        // If the user is not found, return an error
        if (rows.length === 0) {
            console.log(`User not found: ${email}`);  // Log when the user is not found
            res.status(404).json({ message: `User not found: ${[email]}` });
            return;
        }

        const user = rows[0];
        console.log(`Found user: ${user.email}`);  // Log the found user's email

        // Check if the provided password matches the stored password (plain text comparison)
        if (password !== user.password) {
            console.log(`Invalid credentials for ${email}`);  // Log invalid credentials
            res.status(401).json({ message: `Invalid credentials for ${email}` });
            return;
        }

        // Generate a JWT token
        const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });

        console.log(`JWT token generated for ${email}: ${token}`);  // Log the generated JWT token

        // Respond with the token
        // res.json({ token });
        res.status(200).json({
            message: 'Login successful',
            userId: user.id,
            email: user.email,
            token: token,
            expiresIn: '1 hour'
        });
    } catch (error) {
        console.error('Error during login:', error);  // Log errors
        res.status(500).json({ message: 'Server error', error });
    }
};

// Check if user is logged in (GET)
export const getLogin = async (req: Request, res: Response): Promise<void> => {
    console.log('Login route accessed');  // Log when the GET request for the login route is accessed
    res.json({ message: 'Login route success' });
};
