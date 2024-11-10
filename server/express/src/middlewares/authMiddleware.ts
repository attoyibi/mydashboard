import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

export const authenticateToken = (req: Request, res: Response, next: NextFunction): void => {
    const token = req.header('Authorization')?.split(' ')[1];

    if (!token) {
        res.status(401).json({ message: 'Access denied' });
        return;
    }

    try {
        const verified = jwt.verify(token, JWT_SECRET) as string | JwtPayload;
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).json({ message: 'Invalid token' });
    }
};
