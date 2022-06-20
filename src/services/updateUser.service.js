const Users = require('../schemas/db.schema')
import * as bcrypt from 'bcryptjs'


export default async function updateUserService(newClient, uuid) {
    const client = await Users.findOne({ uuid: uuid })


    const date = new Date()

    const today = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`

    newClient.updatedOn = today

    if (newClient.password) {
        const hashPassword = await bcrypt.hash(newClient.password, 10)
        newClient.password = hashPassword
    }



    if (newClient.isAdm !== undefined) {
        throw new Error("Not allowed to change admin field.")
    }

    const updatedUser = await Users.updateOne({ uuid: uuid }, { ...newClient })

    const user = await Users.findOne({ uuid: uuid }).lean()

    delete user.password

    return user

}



