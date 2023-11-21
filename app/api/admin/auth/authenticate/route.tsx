import { NextRequest, NextResponse } from "next/server";
import prisma from "@/functions/db";

export async function GET(request: NextRequest) {
    if (!request.cookies.has("token")) {
        var response = new NextResponse("Couldn't find token", {
            status: 401,
        });
        return response;
    }
    const fromDB = await prisma.user.findUnique({
        where: {
            token: request.cookies.get("token").value,
        },
        select: {
            username: true,
            email: true,
            perms: true,
        },
    });
    if (fromDB != null) {
        if (request.url.includes("?perms=")) {
            const perm = request.url.split("?perms=")[1].split("&")[0];
            if (!fromDB.perms.includes(perm)) {
                var response = new NextResponse("Unauthorized", {
                    status: 403,
                });
                return response;
            }
        }
        const toClient = {
            username: fromDB.username,
            email: fromDB.email,
        };
        var response = new NextResponse(JSON.stringify(toClient), {
            status: 200,
        });
        return response;
    } else {
        var response = new NextResponse("Couldn't find account with token", {
            status: 404,
        });
        return response;
    }
}
