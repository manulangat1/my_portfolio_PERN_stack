import { Router } from 'express'
import { UserController } from '../controllers/user'


const router = new Router()


router.route('/').post(UserController.createUser)
router.route('/login').post(UserController.loginUser)
router.route('/admin').post(UserController.createAdmin)


export default router