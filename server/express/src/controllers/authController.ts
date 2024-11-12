import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import pool from '../db';
import { OkPacket } from 'mysql2';
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

type User = {
    id: number;
    email: string;
    password: string;
    username: string
    // Add other user fields if any
};

export const login = async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
        res.status(400).json({
            status: 'fail',
            code: 400,
            message: 'Validation error: Email and password are required.',
            data: null,
            error: { field: email ? 'password' : 'email', issue: 'Required field is missing.' }
        });
        return;
    }

    try {
        // Query the database for the user by email
        const [rows]: [User[], any] = await pool.query('SELECT * FROM user WHERE email = ?', [email]) as [User[], any];

        // If the user is not found, return an error
        if (rows.length === 0) {
            res.status(404).json({
                status: 'fail',
                code: 404,
                message: 'User not found.',
                data: null,
                error: { message: `No user found for email: ${email}` }
            });
            return;
        }

        const user = rows[0];

        // Check if the provided password matches the stored password (plain text comparison)
        if (password !== user.password) {
            res.status(401).json({
                status: 'fail',
                code: 401,
                message: 'Invalid credentials.',
                data: null,
                error: { message: `Invalid credentials for email: ${email}` }
            });
            return;
        }

        // Generate a JWT token
        const token = jwt.sign({ id: user.id, email: user.email, username: user.username }, JWT_SECRET, { expiresIn: '1h' });

        // Respond with the token
        res.status(200).json({
            status: 'success',
            code: 200,
            message: 'Login successful.',
            data: {
                userId: user.id,
                email: user.email,
                token: token,
                username: user.username,
                expiresIn: '1 hour'
            },
            error: null
        });
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';

        res.status(500).json({
            status: 'error',
            code: 500,
            message: 'Server error',
            data: null,
            error: {
                message: 'An unexpected error occurred during login.',
                details: errorMessage
            }
        });
    }
};

export const register = async (req: Request, res: Response): Promise<void> => {
    const { email, password, username } = req.body;

    // Validate input
    if (!email || !password || !username) {
        res.status(400).json({
            status: 'fail',
            code: 400,
            message: 'Validation error: Email, password, and username are required.',
            data: null,
            error: { field: email ? (password ? 'username' : 'password') : 'email', issue: 'Required field is missing.' }
        });
        return;
    }

    try {
        // Query the database to check if the user already exists
        const [rows]: [any[], any] = await pool.query('SELECT * FROM user WHERE email = ?', [email]);

        // If the user already exists, return an error
        if (rows.length > 0) {
            res.status(400).json({
                status: 'fail',
                code: 400,
                message: 'User already exists.',
                data: null,
                error: { message: `A user with the email ${email} already exists.` }
            });
            return;
        }

        // Hash the password before storing it
        // const hashedPassword = await bcrypt.hash(password, 10);

        // Insert the new user into the database with username
        const [result]: [OkPacket, any] = await pool.query(
            'INSERT INTO user (email, password, username) VALUES (?, ?, ?)',
            [email, password, username]
        );

        // Respond with success
        res.status(201).json({
            status: 'success',
            code: 201,
            message: 'User registered successfully.',
            data: {
                userId: result.insertId,
                email: email,
                username: username
            },
            error: null
        });
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';

        res.status(500).json({
            status: 'error',
            code: 500,
            message: 'Server error during registration.',
            data: null,
            error: {
                message: 'An unexpected error occurred during registration.',
                details: errorMessage
            }
        });
    }
};

// Check if user is logged in (GET)
export const getLogin = async (req: Request, res: Response): Promise<void> => {
    console.log('Login route accessed');  // Log when the GET request for the login route is accessed
    res.json({ message: 'Login route success' });
};
