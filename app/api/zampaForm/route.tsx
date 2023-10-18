import * as Database from "../../functions/db";
import { ZampaFormResponse } from "../../components/types/zampaFormResponse";
import { log } from "console";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const res = await request.json();
    const response: ZampaFormResponse = {
        name: res.name,
        surname: res.surname,
        email: res.email,
        birthday: res.birthday,
        address: res.address,
        street_number: res.street_number,
        city: res.city,
        country: res.country,
    };
    const result = await Database.insertToDB<ZampaFormResponse>(
        process.env.NODE_ENV == "production" ? "Zampfia" : "ZampfiaDev",
        "ZampaVinti",
        response,
    );
    if (result === true) {
        return new NextResponse("Received by Database", {
            status: 200,
        });
    } else if (result === false) {
        return new NextResponse("Errored. Check logs", {
            status: 500,
        });
    }
}
