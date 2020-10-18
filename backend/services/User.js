import { User } from '../database/models'
import bcrypt from 'bcryptjs'



export default class UserService {
    static async createUser(userDetails){


        const user = await User.create(userDetails,{raw:true})


        await user.update({isActive:true});
        
        return user
    }
    static async createAdmin(adminDetails){

        const admin = await User.create(adminDetails,{raw:true});
        
        await admin.update({isActive:true,isAdmin:true});

        return admin;
    };

    static async loginUser({email,password}){
        const user = await User.findOne({where:{email:email}})
        const isPasswordMatch = await bcrypt.compareSync(user.password,password)
        console.log(isPasswordMatch)
        if (isPasswordMatch){
            return user
        }
    }
}