import getUserProfileService from "../services/getUserProfile.service"

export default function getUserProfileController(req, res) {
    const client = req.client

    const clientData = getUserProfileService(client.id)

    return res.status(200).json(clientData)
}
