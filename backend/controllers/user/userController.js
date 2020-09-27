import { UserService }  from '../../services'
import responseHandler from '../../helpers/responsehandler'
export  default  class UserController {
    static async createUser(req,res){
        try{
            const userDetails = req.body
            const user = await UserService.createUser(userDetails)
            return responseHandler(res,'User created successfully',200,user)
        } catch (err){
            return responseHandler(res,'Internal Server Error',500)
        }
        
    }
}