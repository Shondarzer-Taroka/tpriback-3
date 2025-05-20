import prisma from "../config/database";
import { User } from "../generated/prisma";
import { handleError } from "../utils/error-handler";
import bcrypt from 'bcrypt';

export const createUser=async (userData:Omit<User,'id'|'createdAt'|'updatedAt'>) => {
    const userHashPassword=await bcrypt.hash(userData.password,10)
    try {
        const user = prisma.user.create({data:{...userData,password:userHashPassword}})
        return user
    } catch (error) {
        console.log(error);
        
    }
}



export const getAllUsers=async () => {
    return prisma.user.findMany()
}







export const findUserByEmail=async (email:string) => {
    try {
        return prisma.user.findUnique({where:{email}})

    } catch (error) {
        console.log(error);
        
    }
}