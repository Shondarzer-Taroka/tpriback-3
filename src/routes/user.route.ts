
import {Router} from 'express';
import { getAllUsers, login, registerUser } from '../controllers/user.controller';
import { authenticate } from '../utils/auth';
const router= Router()

router.post('/register',registerUser)
router.post('/login',login)
router.get('/',authenticate,getAllUsers)

export default router