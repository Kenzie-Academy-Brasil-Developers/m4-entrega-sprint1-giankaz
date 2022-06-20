const Users = require('../schemas/db.schema')


export default async function deleteUserService(id) {
    const user = await Users.findOne({uuid: id})
    if (!user) {
        throw new Error("User not found")
    } else {
        await Users.deleteOne({uuid : id})
        return "User deleted with success"
    }

}
