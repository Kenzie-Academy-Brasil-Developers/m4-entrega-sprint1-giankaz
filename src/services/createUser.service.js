import { v4 as uuidv4 } from 'uuid'
import * as bcrypt from "bcryptjs";
const Users = require('../schemas/db.schema')

export default async function createUserService(email, password, name, isAdm) {

    try {
        const hashPassword = await bcrypt.hash(password, 10)

        const date = new Date()

        const today = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`

        const newUser = {
            email,
            password: hashPassword,
            name,
            isAdm,
            createdOn: today,
            updatedOn: today,
            uuid: uuidv4()
        }

        const userToSend = {
            email,
            name,
            isAdm,
            createdOn: today,
            updatedOn: today,
            uuid: newUser.uuid
        }

        const createdUser = await Users.create(newUser)

        await createdUser.save()
        
        return userToSend
    } catch (error) {
        console.log(error);
    }
}
