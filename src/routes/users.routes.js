import { Router } from "express";

import createUserController from "../controllers/createUser.controller";
import createUserMiddleware from "../middlewares/createUser.middleware";

import listUserController from "../controllers/listUser.controller";
import listUsersMiddleware from "../middlewares/listUsers.middleware";

import loginUserController from "../controllers/loginUser.controller";
import loginUserMiddleware from "../middlewares/loginUser.middleware";
import verifyTokenMiddleware from "../middlewares/verifyToken.middleware";
import verifyAdmMiddleware from "../middlewares/verifyAdm.middleware";
import getUserProfileController from "../controllers/getUserProfile.controller";
import verifyUserExistsMiddleware from "../middlewares/verifyUserExists.middleware";
import updateUserController from "../controllers/updateUser.controller";
import deleteUserController from "../controllers/deleteUser.controller";




const routes = Router()

//create
routes.post('', createUserMiddleware, createUserController)
routes.post('/login', loginUserMiddleware, loginUserController)

//read
routes.get('', verifyTokenMiddleware, verifyAdmMiddleware, listUserController)
routes.get('/profile', verifyTokenMiddleware, getUserProfileController)

//update
routes.patch('/:id', verifyTokenMiddleware, verifyAdmMiddleware, updateUserController)

//delete
routes.delete('/:id', verifyTokenMiddleware, verifyAdmMiddleware, deleteUserController)



export default routes 