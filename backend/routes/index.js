import { Router} from 'express'
import user from './user'
const router = new Router()

router.use('/',user)


export default router