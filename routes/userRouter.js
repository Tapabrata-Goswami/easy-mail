import express from 'express'
import { getUserConntroller } from '../controllers/userController.js';

const router = express.Router();

router.get('/', getUserConntroller)

export default router;