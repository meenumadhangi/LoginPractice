import  * as dotenv from 'dotenv';
import * as path from 'path';
dotenv.config({ path: path.resolve(__dirname, '../.env') });


export const config = {
    baseUrl: "https://practicetestautomation.com/practice-test-login/",
    dashboardUrl:"https://practicetestautomation.com/logged-in-successfully/",
    username: process.env.APP_USERNAME || "student",
    password: process.env.PASSWORD || "Password123",
    timeout: 30000
}