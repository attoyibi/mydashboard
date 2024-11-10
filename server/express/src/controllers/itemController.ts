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

export const getAllItems = async (req: Request, res: Response): Promise<void> => {
    try {
        // Query all items from the database
        const [items]: [RowDataPacket[], any] = await pool.query<RowDataPacket[]>('SELECT * FROM item');

        // Send successful response with items data
        res.status(200).json({
            status: 'success',
            code: 200,
            message: 'Items retrieved successfully',
            data: items,
            error: null
        });
    } catch (error) {
        // Handle errors with a structured error response
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';

        res.status(500).json({
            status: 'error',
            code: 500,
            message: 'Server error occurred while retrieving items',
            data: null,
            error: {
                message: errorMessage,
                details: 'An unexpected error occurred while fetching items.'
            }
        });
    }
};

// Get a single item by USER_ID
export const getItemByUserId = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;

    try {
        // Query the database for items by user ID
        const [rows]: [RowDataPacket[], any] = await pool.query<RowDataPacket[]>('SELECT * FROM item WHERE user_id = ?', [id]);

        // Check if any items are found
        if (!Array.isArray(rows) || rows.length === 0) {
            res.status(404).json({
                status: 'fail',
                code: 404,
                message: `No items found for user with ID: ${id}`,
                data: null,
                error: null
            });
            return;
        }

        // Send success response with items data
        res.status(200).json({
            status: 'success',
            code: 200,
            message: `Items retrieved successfully for user with ID: ${id}`,
            data: rows,
            error: null
        });
    } catch (error) {
        // Handle server error with structured error response
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';

        res.status(500).json({
            status: 'error',
            code: 500,
            message: 'Server error occurred while retrieving items by user ID',
            data: null,
            error: {
                message: errorMessage,
                details: 'An unexpected error occurred during the database query.'
            }
        });
    }
};

// Create a new item
export const createItem = async (req: Request, res: Response): Promise<void> => {
    const { user_id, name, description, quantity, price } = req.body;

    // Validate required fields
    if (!user_id || !name || !quantity || !price) {
        res.status(400).json({
            status: 'fail',
            code: 400,
            message: 'Required fields: user_id, name, quantity, and price must be provided',
            data: null,
            error: null
        });
        return;
    }

    try {
        // Insert item into the database
        const [result]: [OkPacket, any] = await pool.query(
            'INSERT INTO item (user_id, name, description, quantity, price) VALUES (?, ?, ?, ?, ?)',
            [user_id, name, description, quantity, price]
        );

        // Respond with a success message and the new item ID
        res.status(201).json({
            status: 'success',
            code: 201,
            message: 'Item created successfully',
            data: {
                itemId: result.insertId
            },
            error: null
        });
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';

        // Respond with an error message and details
        res.status(500).json({
            status: 'error',
            code: 500,
            message: 'Server error occurred while creating item',
            data: null,
            error: {
                message: errorMessage,
                details: 'An unexpected error occurred during the item creation query.'
            }
        });
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
        // Correctly define the query result type as OkPacket for affectedRows
        const [result]: [OkPacket, any] = await pool.query('DELETE FROM item WHERE id = ?', [id]);

        // Check if any rows were affected by the DELETE query
        if (result.affectedRows === 0) {
            // Item not found or not deleted
            res.status(404).json({
                status: 'fail',
                code: 404,
                message: `Item with ID ${id} not found`,
                data: null,
                error: null
            });
            return;
        }

        // Item successfully deleted
        res.status(200).json({
            status: 'success',
            code: 200,
            message: 'Item deleted successfully',
            data: {
                itemId: id
            },
            error: null
        });
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';

        // Server error
        res.status(500).json({
            status: 'error',
            code: 500,
            message: 'Server error occurred while deleting item',
            data: null,
            error: {
                message: errorMessage,
                details: 'An unexpected error occurred during the item deletion query.'
            }
        });
    }
};