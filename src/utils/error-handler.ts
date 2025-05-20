import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { Response } from "express";

export const handleError = async (res: Response, error: unknown) => {
    if (error instanceof Error) {
        res.status(400).json({ message: error.message })
    } else if (error instanceof PrismaClientKnownRequestError) {
        res.status(400).json({ message: error.message })
    } else {
        res.status(400).json({ message: 'Internal server error' })
    }


}