import jwt from "jsonwebtoken"
import users from "../dataBase/dataBase"

export default function verifyTokenMiddleware(req, res, next) {
   try {
    const {authorization} = req.headers

    if (!authorization) {
        return res.status(401).json({message: "Missing authorization headers"})
    }

    const token = authorization.split(' ')[1]
    
    if (!token) {
        return res.status(401).json({message: "Missing Authorization Token."})
    }
    
    jwt.verify(token, "SECRET_KEY", (error, decoded) => {
        if (error) {
            return res.status(401).json({message: "Invalid Token"})
        }

        const client = users.find((user) => user.id === decoded.id)
      
        if (!client) {
            return res.status(404).json({message: "User not found."})
        }
        
        req.client = client
    })

    req.token = token

    next()
   } catch (error) {
       console.log(error)
   }
}
