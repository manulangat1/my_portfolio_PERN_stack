import { User } from '../database/models'

export default class UserService {
    static async createUser(userDetails){
        const user = await User.build(userDetails)
        user.isActive = true 
        await user.save()
        return user
    }
}