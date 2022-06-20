import jwt from 'jsonwebtoken'

const Users = require('../schemas/db.schema')

export default async function verifyAdmGetMiddleware(req, res, next) {
         const { authorization } = req.headers

        if (!authorization) {
            return res.status(401).json({ message: "Missing authorization headers" })

        }

        const token = authorization.split(' ')[1]

        if (!token) {
           return res.status(401).json({ message: "Missing authorization token" })
        }

        jwt.verify(token, "SECRET_KEY", async (error, decoded) => {
            if (error) {
                return res.status(401).json({ message: "Invalid Token" })
            }

            const client = await Users.findOne({ uuid: decoded.uuid }).lean()  
      
            if (client.isAdm !== true) {
                return res.status(401).json({ message: "Unauthorized" })
            }


            req.client = client
            next()
        })
  
}
