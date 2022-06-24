const express = require('express')
const Router = express.Router()

import loginUserController from "../controllers/loginUser.controller";

const loginRoutes = Router()

loginRoutes.post('', loginUserController)


module.exports = loginRoutes