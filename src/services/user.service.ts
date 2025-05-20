
// import { User } from "../generated/prisma";

import prisma from "../config/database";
import { User } from "../generated/prisma";
import * as userModel from "../models/user.model";
import bcrypt from 'bcrypt';
import { generateToken } from "../utils/auth";


export const registerUser = async (userData: Omit<User, 'id' | 'createdAt' | 'updatedAt'>) => {
    const existingUser = await userModel.findUserByEmail(userData.email)
    if (existingUser) {
        throw new Error('Email already used')
    }
    if (!existingUser) {
        return userModel.createUser(userData)
    }

    //   const existingUser = await userModel.findUserByEmail(userData.email);
    //   if (existingUser) throw new Error('Email already in use');
    //   return userModel.createUser(userData);
};


export const loginUser=async (email:string,password:string) => {
    const finduser=await userModel.findUserByEmail(email)
    if (!finduser) {
        throw new Error('Invalid creadentials')
    }
    const matchPassword= await bcrypt.compare(password,finduser.password)

    console.log(matchPassword);
    if (!matchPassword) {
        throw new Error('Invalid creadentials')
    }

    const token=generateToken(finduser.email,finduser.name,finduser.role)
    return {finduser,token}
}