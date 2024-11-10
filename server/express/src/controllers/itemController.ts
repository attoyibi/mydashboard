import { Request, Response } from 'express';
import pool from '../db';
import { RowDataPacket, OkPacket } from 'mysql2';

// Type definition for database query results
type Item = {
    id: number;
    user_id: number;
    name: string;
    description: string;
    quantity: number;
    price: number;
};

// Get all items
export const getAllItems = async (req: Request, res: Response): Promise<void> => {
    try {
        const [items]: [RowDataPacket[], any] = await pool.query<RowDataPacket[]>('SELECT * FROM item');
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Get a single item by USER_ID
export const getItemByUserId = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;

    try {
        const [rows]: [RowDataPacket[], any] = await pool.query<RowDataPacket[]>('SELECT * FROM item WHERE user_id = ?', [id]);

        if (!Array.isArray(rows) || rows.length === 0) {
            res.status(404).json({ message: 'Item not found' });
            return;
        }

        res.json(rows);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Create a new item
export const createItem = async (req: Request, res: Response): Promise<void> => {
    const { user_id, name, description, quantity, price } = req.body;

    try {
        const [result]: [OkPacket, any] = await pool.query('INSERT INTO item (user_id, name, description, quantity, price) VALUES (?, ?, ?, ?, ?)', [user_id, name, description, quantity, price]);

        res.status(201).json({ message: 'Item created', itemId: result.insertId });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Update an item
export const updateItem = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const { name, description, quantity, price } = req.body;

    try {
        await pool.query('UPDATE item SET name = ?, description = ?, quantity = ?, price = ? WHERE id = ?', [name, description, quantity, price, id]);

        res.json({ message: 'Item updated' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Delete an item
export const deleteItem = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;

    try {
        await pool.query('DELETE FROM item WHERE id = ?', [id]);
        res.json({ message: 'Item deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
