import express from 'express';
import { login, getLogin, register } from '../controllers/authController';

const router = express.Router();

router.post('/login', login);
router.post('/register', register);
// GET route to check if user is logged in (simplified version)
router.get('/', getLogin);

export default router;
