import { UserService }  from '../../services'
import responseHandler from '../../helpers/responsehandler'


import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export  default  class UserController {
    static async createUser(req,res){
        try{
            const email = req.body.email
            const password = bcrypt.hashSync(req.body.password, 8)
            const userDetails = {
                email,
                password
            }
            const user = await UserService.createUser(userDetails)
            // const token = jwt.sign({})
            return responseHandler(res,'User created successfully',201,user)
        } catch (err){
            return responseHandler(res,err,500)
        }       
    }
    static async createAdmin(req,res){
        try{
            const email = req.body.email
            const password = bcrypt.hashSync(req.body.password, 8)
            const userDetails = {
                email,
                password
            }
            const user = await UserService.createUser(userDetails)
            return responseHandler(res,'User created successfully',201,user)
            
        } catch (err){
            return responseHandler(res,err,500)
        }       
    }

    static async loginUser(req,res){
        try{
            const { email,password } =  req.body 
            const user = await UserService.loginUser({email,password})
            // const token = await jwt.sign({})
            return responseHandler(res,'User Logged in successfully',200,user)
        } catch (err){
            console.log(err)
            return responseHandler(res,err,500)
        }
    }
}