import nodemailer from "nodemailer";
import { Email } from "@/components/types/email";

export enum Addresses {
    NOREPLY,
    CONTACT,
}

const addressesEnv = {
    noreply: {
        username: process.env.SMTP_NOREPLY_USERNAME,
        password: process.env.SMTP_NOREPLY_PASSWORD,
    },
    contact: {
        username: process.env.SMTP_CONTACT_USERNAME,
        password: process.env.SMTP_CONTACT_PASSWORD,
    },
};

export async function sendEmail(request: Email, address: Addresses) {
    const [username, password] = decideAuth(address);
    var transport = nodemailer.createTransport({
        host: process.env.SMTP_SERVER,
        port: process.env.SMTP_PORT,
        secure: false,
        auth: {
            username: username,
            password: password,
        },
    });
    var response = await transport.sendMail(request);
    return response;
}

function decideAuth(address: Addresses) {
    switch (address) {
        case Addresses.NOREPLY:
            var username = addressesEnv.noreply.username;
            var password = addressesEnv.noreply.password;
            break;
        case Addresses.CONTACT:
            var username = addressesEnv.contact.username;
            var password = addressesEnv.contact.password;
            break;
        default:
            var username = addressesEnv.noreply.username;
            var password = addressesEnv.noreply.password;
            break;
    }
    return [username, password];
}
