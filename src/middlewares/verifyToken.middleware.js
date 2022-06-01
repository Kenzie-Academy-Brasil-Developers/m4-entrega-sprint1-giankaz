import jwt from "jsonwebtoken"
import { decode } from "jsonwebtoken"
import users from "../../dataBase/dataBase"

export default function verifyTokenMiddleware(req, res, next) {
    const {authorization} = req.headers

    const token = authorization.split(' ')[1]
    
    if (!token) {
        return res.status(401).json({message: "Missing Authorization Token."})
    }
    
    jwt.verify(token, "SECRET_KEY", (error, decoded) => {
        if (error) {
            return res.status(401).json({message: "Invalid Token"})
        }

        const client = users.find((user) => user.email === decoded.email)
      
        if (!client) {
            return res.status(404).json({message: "User not found."})
        }
        
        req.client = client
    })

    req.token = token

    next()
}

