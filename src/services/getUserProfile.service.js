const Users = require('../schemas/db.schema')

export default async function getUserProfileService(id) {
    const client = await Users.findOne({uuid : id})



    return client

}
