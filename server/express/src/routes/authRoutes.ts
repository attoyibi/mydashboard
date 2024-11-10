import express from 'express';
import { login, getLogin } from '../controllers/authController';

const router = express.Router();

router.post('/login', login);
// GET route to check if user is logged in (simplified version)
router.get('/', getLogin);

export default router;
