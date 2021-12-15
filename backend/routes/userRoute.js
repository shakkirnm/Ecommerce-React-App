import express from 'express'
const router = express.Router()
import {userLogin, userRegister} from '../controller/userController.js'

router.route('/register').post(userRegister)

router.route('/login').post(userLogin)

export default router