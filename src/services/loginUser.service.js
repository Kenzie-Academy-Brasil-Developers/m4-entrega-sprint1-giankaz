import jwt from 'jsonwebtoken'
import * as bcrypt from 'bcryptjs'

const Users = require('../schemas/db.schema')

export default async function loginUserService(email, password) {
    const client = await Users.findOne({email: email})



    if (!client) {
       throw new Error("User not found.")
    }

    const token = jwt.sign({ uuid: client.uuid }, 'SECRET_KEY', { expiresIn: "24h" })

   

 

    const passwordCheck = bcrypt.compareSync(password, client.password)


    if (!passwordCheck) {
       throw new Error("Wrong email/password")
    }

    return token
}
