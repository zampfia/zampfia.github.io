// import {
//     WalletRegister,
//     PrivateWallet,
//     PublicWalletAuth,
// } from "@/components/types/walletAuth";
// import crypto from "crypto";
// import nextBase64 from "next-base64";
// import { NextResponse } from "next/server";
// import * as Utils from "@/functions/utils";

// export async function POST(request: Request) {
//     const res = await request.json();
//     const address = crypto.randomBytes(32).toString("hex");
//     // const id = await Database.getDocCountFromDB(
//     //     "WalletInfo",
//     // );
//     // const dbRequest: WalletRegister = {
//     //     address: address,
//     //     id: id,
//     //     name: res.name,
//     //     surname: res.surname,
//     //     email: res.email,
//     // };
//     // const infoResult = await Database.insertToDB<WalletRegister>(
//     //     "WalletInfo",
//     //     dbRequest,
//     // );
//     // if (infoResult == false) {
//     //     return new NextResponse("Unable to send information to the database", {
//     //         status: 500,
//     //     });
//     // }
//     const decodedHash = crypto.randomBytes(128).toString("hex");
//     const encodedHash = nextBase64.encode(decodedHash);
//     const salt = Buffer.from(
//         crypto.getRandomValues(new Uint8Array(12)),
//     ).toString("base64");
//     const message = crypto.randomBytes(64).toString("hex");
//     const aesSecretKey = Buffer.from(
//         crypto.getRandomValues(new Uint8Array(32)),
//     ).toString("base64");
//     const identification = await Utils.encryptIdentification(
//         decodedHash,
//         salt,
//         aesSecretKey,
//     );
//     const { publicKey: rsaPublicKey, privateKey: rsaPrivateKey } =
//         crypto.generateKeyPairSync("rsa", {
//             modulusLength: 2048,
//             publicKeyEncoding: {
//                 type: "pkcs1",
//                 format: "pem",
//             },
//             privateKeyEncoding: {
//                 type: "pkcs1",
//                 format: "pem",
//             },
//         });
//     const { s: rsaPublicKey1, t: rsaPublicKey2 } =
//         Utils.deintersectStrings(rsaPublicKey);
//     const serverWallet: PrivateWallet = {
//         address: address,
//         identification: identification,
//         salt: salt,
//         rsaPrivateKey: rsaPrivateKey,
//         rsaPublicKey: rsaPublicKey2,
//         message: message,
//         password: res.password,
//     };
//     const clientWallet: PublicWalletAuth = {
//         address: address,
//         hash: encodedHash,
//         publicKey: rsaPublicKey1,
//         secretKey: aesSecretKey,
//         salt: res.salt,
//     };
//     // const walletResult = await Database.insertToDB<PrivateWallet>(
//     //     "WalletAuth",
//     //     serverWallet,
//     // );
//     // if (walletResult == false) {
//     //     return new NextResponse(
//     //         "Unable to send the server wallet to the database",
//     //         {
//     //             status: 500,
//     //         },
//     //     );
//     // }
//     const toDownload = new Blob(
//         [new TextEncoder().encode(JSON.stringify(clientWallet))],
//         {
//             type: "application/json;charset=utf-8",
//         },
//     );
//     return new NextResponse(toDownload, {
//         status: 200,
//         headers: {
//             "Content-Type": "application/json",
//             "Content-Disposition": "attachment; filename=wallet.json",
//         },
//     });
// }
