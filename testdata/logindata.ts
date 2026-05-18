
import { config } from "../config/config"

//testing feauture/login branch workflow

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