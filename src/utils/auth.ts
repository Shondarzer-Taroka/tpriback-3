import { NextFunction,Response } from 'express';
import jsonwebtoken from 'jsonwebtoken';
import { AuthenticatedRequest } from '../types/custom-types';
import { Role } from '@prisma/client';



const JWT_SECRET = 'yourtoken'
export const generateToken = async (email: string, name: string, role: Role) => {
    const token = jsonwebtoken.sign({ email, name, role }, JWT_SECRET, { expiresIn: '1d' })
    console.log(token);

    return token
}





export const authenticate = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
):void => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    res.status(401).json({ error: 'Authentication required' });
     return
  }

  try {
    const decoded = jsonwebtoken.verify(token, JWT_SECRET) as {
      userId: string;
      role: Role;
      name:string,
      email:string,
    };
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};


