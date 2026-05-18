
import { config } from "../config/config"



export const LoginData = {
    validUser:{
        username: config.username,
        password: config.password
    },
    invaliduser:{

        username:"wronguser",
        password:"wrongpassword"
    }
}