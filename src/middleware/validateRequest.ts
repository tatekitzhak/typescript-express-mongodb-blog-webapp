import { Request, Response, NextFunction } from 'express';

export const validateRequest = (): any => {
    return (req: Request, res: Response, next: NextFunction) => {
        console.log('validateRequest::')
        next()
    }
}