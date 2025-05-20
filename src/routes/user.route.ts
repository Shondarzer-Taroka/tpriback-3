
import {Router} from 'express';
import { getAllUsers, login, registerUser } from '../controllers/user.controller';
import { adminCheck, authenticate, authorize } from '../utils/auth';
const router= Router()

router.post('/register',registerUser)
router.post('/login',login)
router.get('/',authenticate,authorize(["CUSTOMER","ADMIN"]),adminCheck,getAllUsers)

export default router