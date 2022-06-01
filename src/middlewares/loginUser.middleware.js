import users from "../../dataBase/dataBase"
import * as bcrypt from 'bcryptjs'


export default function loginUserMiddleware(req, res, next) {
    const {email, password} = req.body
   
    const client = users.find((user) => user.email === email)


    if (!client) {
        return res.status(400).json({message: "Check your Email or password."})
    }

    const passwordCheck = bcrypt.compareSync(password, client.hashPassword)

    if (!passwordCheck) {
        return res.status(400).json({message: "Check your Email or password."})
    }

    next()
}
