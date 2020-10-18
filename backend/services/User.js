import { User } from '../database/models'
import {  ErrorHandler,handleError } from '../helpers/errors/error'
import bcrypt from 'bcryptjs'



export default class UserService {
    static async createUser(userDetails){
        try {
            const user = await User.create(userDetails,{raw:true});
            await user.update({isActive:true});
            return user
        } catch (err){
            next(err)
        };
    }
    static async createAdmin(adminDetails){
        try {
            const admin = await User.create(adminDetails,{raw:true});
        
        await admin.update({isActive:true,isAdmin:true});

        return admin;
        } catch(err){
            next(err)
        }
        
    };

    static async loginUser({email,password}){
        try {
            const user = await User.findOne({where:{email:email}})

            const isPasswordMatch = await bcrypt.compareSync(user.password,password)
            if (isPasswordMatch){
                return user
            
        }
        throw new Error(403,'Invalid login credentials')
        } catch (err){
            next(err)
        }
        
    }
}