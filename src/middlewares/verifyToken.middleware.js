import jwt from "jsonwebtoken"

const Users = require('../schemas/db.schema')

export default async function verifyTokenMiddleware(req, res, next) {
    try {
        const { authorization } = req.headers

        if (!authorization) {
            return res.status(401).json({ message: "Missing authorization headers" })
        }

        const token = authorization.split(' ')[1]

        if (!token) {
            return res.status(401).json({ message: "Missing Authorization Token." })
        }

        jwt.verify(token, "SECRET_KEY", async (error, decoded) => {
            if (error) {
                return res.status(401).json({ message: "Invalid Token" })
            }

            const client = await Users.findOne({ uuid: decoded.uuid })
          
            req.client =  client
      

            if (!client) {
                return res.status(404).json({ message: "User not found." })
            }

      
           
        
        })

        req.token = token

        next()
    } catch (error) {
        console.log(error)
    }
}
