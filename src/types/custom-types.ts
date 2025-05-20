import { Role } from "@prisma/client";
import { Request } from "express";

export interface AuthenticatedRequest extends Request{
user?:{
    email: string,
    role: Role,
    name:string,
    userId:string
}
}