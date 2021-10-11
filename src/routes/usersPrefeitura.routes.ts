import { Router } from 'express'
import AuthControllerPrefeitura from '../controllers/AuthControllerPrefeitura'
import usersPrefeituraController from '../controllers/UsersPrefeituraController'

const UserRouter = Router()

UserRouter.post('/', usersPrefeituraController.store)
UserRouter.post('/auth', AuthControllerPrefeitura.authenticate)

export default UserRouter
