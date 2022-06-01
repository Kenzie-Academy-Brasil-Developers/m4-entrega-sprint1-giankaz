export default function verifyAdmMiddleware(req, res, next) {
    const { id } = req.params

    const client = req.client

    let verify = false


    if (client.id === id) {
        verify = true
    } else if (client.isAdm) {
        verify = true
    }
 
    if (!verify) {
        return res.status(401).json({message: "Missing permissions."})
    }

    next()
}
