import jwt from 'jsonwebtoken'

export default function loginUserService(email, password) {
    const token = jwt.sign({ email: email }, 'SECRET_KEY', { expiresIn: "24h" })

    return token
}
