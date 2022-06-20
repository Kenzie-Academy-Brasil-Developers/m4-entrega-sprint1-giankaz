const Users = require('../schemas/db.schema')

export default async function listUserService() {
    const allUsers = await Users.find()



    return allUsers
}
