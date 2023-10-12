import * as Database from "../../external/db";
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
        "Zampfia",
        "ZampaVinti",
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
