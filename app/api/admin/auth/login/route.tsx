import prisma from "@/functions/db";
import { NextRequest, NextResponse } from "next/server";
import nextBase64 from "next-base64";
import bcrypt from "bcryptjs";
import crypto from "crypto";

export async function POST(request: NextRequest) {
    const json = await request.json();
    const fromDB = await prisma.user.findUnique({
        where: {
            username: json.username,
        },
    });
    if (fromDB === null) {
        var response = new NextResponse(
            "Couldn't find an account with username",
            {
                status: 404,
            },
        );
        return response;
    }
    const result = await bcrypt.compare(json.password, fromDB.password);
    if (result === true) {
        const token = nextBase64.encode(
            Array.from(crypto.getRandomValues(new Int8Array(32))).join(""),
        );
        const toDB = await prisma.user.update({
            where: {
                id: fromDB.id,
            },
            data: {
                token: token,
            },
        });
        var response = new NextResponse("Logged in", {
            status: 200,
        });
        response.cookies.set("token", token, {
            expires: new Date(Date.now() + 30 * 60 * 1000),
        });
        return response;
    } else {
        var response = new NextResponse("Incorrect Credentials", {
            status: 401,
        });
        return response;
    }
}
