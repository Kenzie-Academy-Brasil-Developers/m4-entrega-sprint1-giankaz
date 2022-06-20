import getUserProfileService from "../services/getUserProfile.service"
import jwt from "jsonwebtoken"

const Users = require('../schemas/db.schema')

export default async function getUserProfileController(req, res) {
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


            const clientData = await getUserProfileService(client.uuid)


            return res.status(200).json(clientData)

        })

    } catch (error) {
        console.log(`🤖 ~ getUserProfileController ~ error`, error)

    }



}
