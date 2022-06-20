import jwt from 'jsonwebtoken'

const Users = require('../schemas/db.schema')

export default async function verifyAdmMiddleware(req, res, next) {
    const { uuid } = req.params

    const client = await Users.findOne({uuid: uuid})



    let verify = false


    if (client.uuid === uuid) {
        verify = true
    } else if (client.isAdm) {
        verify = true
    }
 
    if (!verify) {
        return res.status(401).json({message: "Missing admin permissions"})
    }

    next()
}
