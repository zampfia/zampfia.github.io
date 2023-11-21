import prisma from "@/functions/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const res = await request.json();
    const result = await prisma.contacting.create({
        data: {
            name: res.name,
            surname: res.surname,
            email: res.email,
            country: res.country,
            subject: res.subject,
            message: res.message,
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
