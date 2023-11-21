import prisma from "@/functions/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const res = await request.json();
    const result = await prisma.zampaVinti.create({
        data: {
            name: res.name,
            surname: res.surname,
            email: res.email,
            birthday: res.birthday,
            address: res.address,
            street_number: res.street_number,
            city: res.city,
            country: res.country,
        },
    });
    if (result != null) {
        return new NextResponse("Received by Database", {
            status: 200,
        });
    } else if (result === null) {
        return new NextResponse("Errored. Check logs", {
            status: 500,
        });
    }
}
