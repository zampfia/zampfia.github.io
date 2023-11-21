import { NextRequest, NextResponse } from "next/server";
import prisma from "@/functions/db";
import nextBase64 from "next-base64";

export async function GET(request: NextRequest) {
    if (!request.cookies.has("token")) {
        var response = new NextResponse("Couldn't find token", {
            status: 401,
        });
        return response;
    }
    const toDB = await prisma.user.findUnique({
        where: {
            token: request.cookies.get("token").value,
        },
    });
    if (toDB === null) {
        var response = new NextResponse("Couldn't find account with token", {
            status: 401,
        });
        return response;
    } else if (!toDB.perms.includes("readDB")) {
        var response = new NextResponse("Missing permissions", {
            status: 403,
        });
        return response;
    }
    const fromDB = await prisma.contacting.findMany();
    if (fromDB != null) {
        var toSend = "";
        fromDB.map((item, i) => {
            toSend +=
                JSON.stringify(item) + (i === fromDB.length - 1 ? "" : ",,,");
        });
        var response = new NextResponse(nextBase64.encode(toSend), {
            status: 200,
        });
        return response;
    } else {
        var response = new NextResponse("Couldn't find collection", {
            status: 404,
        });
        return response;
    }
}
