import { Request, Response } from 'express';
import * as services from '../services/user.service';
import { handleError } from '../utils/error-handler';
export const registerUser = async (req: Request, res: Response) => {
    try {
        const user = req.body
        console.log(user);
        
        const createdUser = await services.registerUser(user)
        res.status(201).json({ message: 'user created', data: createdUser })
    } catch (error) {
        handleError(res, error)
    }
}


export const login=async (req:Request,res:Response) => {
try {
        const user=req.body
    console.log(user);
     const loginUser=await services.loginUser(user.email,user.password)  
     console.log(loginUser);
     
     res.status(200).json({message:'user found',user:loginUser})
} catch (error) {
    handleError(res,error)
}
}


export const getAllUsers=async (req:Request,res:Response) => {
    try {
        const users=await services.getAllUsers()
        console.log('d',users);
        
        res.status(200).json(users)
    } catch (error) {
        handleError(res,error)
    }
}