import jwt from 'jsonwebtoken';
import  { User } from '../database/models';
import { handleError,ErrorHandler } from '../helpers/errors/error';
export default class AuthMiddleware {

    static async isAuth(){
        try {
            const token = req.header('Authorization').replace('Bearer ','');
            const data = jwt.verify(token,process.env.TOKEN_SECRET);

            const user = await User.findByPk(data);
            if (user){
                req.user = user ;
                next();
            };
            throw new ErrorHandler(404,'Invalid Token Provided');
        } catch (err){
            next(err);
        };
    };

    static async isAdmin(){
        try{
            if (req.user.isAdmin){
                next()
            }
            throw new ErrorHandler(403,'Insufficient Permissions to view this page.')
        }catch (err){
            next(err)
        }
    }
    static async isActive(){
        try{
            if (req.user.isActive){
                next()
            }
            throw new ErrorHandler(403,'Insufficient Permissions to view this page.')
        }catch (err){
            next(err)
        }
    }
}