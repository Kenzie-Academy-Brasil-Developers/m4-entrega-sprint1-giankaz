import { Router } from "express";
import createUserController from "../controllers/createUser.controller";
import deleteUserController from "../controllers/deleteUser.controller";
import getUserProfileController from "../controllers/getUserProfile.controller";
import listUserController from "../controllers/listUser.controller";
import updateUserController from "../controllers/updateUser.controller";
import createUserMiddleware from "../middlewares/createUser.middleware";
import verifyAdmMiddleware from "../middlewares/verifyAdm.middleware";
import verifyTokenMiddleware from "../middlewares/verifyToken.middleware";







const routes = Router()

//create
routes.post('', createUserMiddleware, createUserController)


//read
routes.get('', verifyAdmMiddleware, listUserController)
routes.get('/profile', verifyTokenMiddleware, getUserProfileController)

//update
routes.patch('/:id', verifyTokenMiddleware, verifyAdmMiddleware, updateUserController)

//delete
routes.delete('/:id', verifyTokenMiddleware, verifyAdmMiddleware, deleteUserController)



export default routes 