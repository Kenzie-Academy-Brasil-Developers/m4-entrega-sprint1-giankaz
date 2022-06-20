import { Router } from "express";
import createUserController from "../controllers/createUser.controller";
import deleteUserController from "../controllers/deleteUser.controller";
import getUserProfileController from "../controllers/getUserProfile.controller";
import listUserController from "../controllers/listUser.controller";
import updateUserController from "../controllers/updateUser.controller";
import createUserMiddleware from "../middlewares/createUser.middleware";
import schemaValidation from "../middlewares/schemaValidation";
import verifyAdmMiddleware from "../middlewares/verifyAdm.middleware";
import verifyAdmGetMiddleware from "../middlewares/verifyAdmGet.middleware";
import verifyTokenMiddleware from "../middlewares/verifyToken.middleware";
import userSchema from "../schemas/user.schema";


const routes = Router()

//create
routes.post('', schemaValidation(userSchema), createUserMiddleware, createUserController)


//read
routes.get('', verifyAdmGetMiddleware, listUserController)
routes.get('/profile', verifyTokenMiddleware, getUserProfileController)

//update
routes.patch('/:uuid', verifyTokenMiddleware, verifyAdmMiddleware, updateUserController)

//delete
routes.delete('/:uuid', verifyTokenMiddleware, verifyAdmGetMiddleware, deleteUserController)



module.exports = routes 