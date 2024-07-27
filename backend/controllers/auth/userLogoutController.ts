import { Request, Response } from 'express';

const userLogout = async function (req: Request, res: Response) {
    try{
        res.cookie('jwt', '', { maxAge: 1 });
        res.status(200).json({ message: 'Logged out successfully' });
        console.log('Logot successfully');
    }catch(error){
        console.log('logout error:' , error);
    };
    
}

export default userLogout;