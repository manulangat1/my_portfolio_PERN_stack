import { Router} from 'express'
import user from './user'
import home from './home_routes'
const router = new Router()

router.use('/auth/',user)
router.use('/api/',home)

export default router