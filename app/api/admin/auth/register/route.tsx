import prisma from "@/functions/db";
import { NextRequest, NextResponse } from "next/server";
import nextBase64 from "next-base64";
import bcrypt from "bcrypt";

export async function POST(request: NextRequest) {
    if (process.env.NODE_ENV === "production") {
        return new NextResponse("NAH", {
            status: 20103410,
        });
    }
    const json = await request.json();
    const fromDB = await prisma.user.findUnique({
        where: {
            username: json.username,
        },
    });
    if (fromDB != null) {
        var response = new NextResponse("Username already taken", {
            status: 432,
            statusText: "Username already taken",
        });
        return response;
    }
    const password = await bcrypt.hash(json.password, 10);
    const toDB = await prisma.user.create({
        data: {
            username: json.username,
            email: json.email,
            password: password,
        },
    });
    if (toDB === null) {
        var response = new NextResponse("Unable to create user", {
            status: 500,
        });
        return response;
    }
    const token = nextBase64.encode(
        Array.from(crypto.getRandomValues(new Int8Array(32))).join(""),
    );
    const tokenToDB = await prisma.user.update({
        where: {
            id: toDB.id,
        },
        data: {
            token: token,
        },
    });
    var response = new NextResponse("User created successfully", {
        status: 200,
    });
    response.cookies.set("token", token, {
        expires: new Date(Date.now() + 30 * 60 * 1000),
    });
    return response;
}
