import { Router } from 'express'
import { UserController } from '../controllers/user'


const router = new Router()


router.route('/').post(UserController.createUser)
router.route('/login').post(UserController.loginUser)


export default router