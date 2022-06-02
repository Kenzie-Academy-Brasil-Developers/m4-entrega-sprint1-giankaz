import loginUserService from "../services/loginUser.service";


export default function loginUserController(req, res) {
    const {email, password} = req.body

    try {
        const token = loginUserService(email, password)
        return res.status(200).json({token: token})

    }  catch (error) {

        return res.status(401).json({ message: error.message })

    }
    

}
