// src/routes/itemRoutes.ts
import express from 'express';
import {
    getAllItems,
    getItemByUserId,
    createItem,
    updateItem,
    deleteItem
} from '../controllers/itemController';
import { authenticateToken } from '../middlewares/authMiddleware';

const router = express.Router();

// router.get('/', authenticateToken, getAllItems);
// router.get('/:id', authenticateToken, getItemById);
// router.post('/', authenticateToken, createItem);
// router.put('/:id', authenticateToken, updateItem);
// router.delete('/:id', authenticateToken, deleteItem);


router.get('/', getAllItems);
router.get('/:id', getItemByUserId);
router.post('/', createItem);
router.put('/:id', updateItem);
router.delete('/:id', deleteItem);


export default router;
