import * as Database from "../../external/db";
import { ContactFormResponse } from "@/components/types/contactFormResponse";
import { log } from "console";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const res = await request.json();
    const response: ContactFormResponse = {
        name: res.name,
        surname: res.surname,
        email: res.email,
        country: res.country,
        subject: res.subject,
        message: res.message,
    };
    const result = await Database.insertToDB<ContactFormResponse>(
        "Zampfia",
        "Contacting",
        response,
    );
    if (result === true) {
        return new NextResponse("Received by Database", {
            status: 200,
        });
    } else if (result === false) {
        log(
            "AAAAAAAAAAAAAAAAAAAAAAAAAAAAA\n" +
                res +
                "\n" +
                result +
                "\n" +
                response,
        );
        return new NextResponse("Errored. Check logs", {
            status: 500,
        });
    }
}
