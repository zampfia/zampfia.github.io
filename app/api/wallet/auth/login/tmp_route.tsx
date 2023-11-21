// import {
//     WalletLoginRequest,
//     PrivateWallet,
//     PublicWalletAuth,
// } from "@/components/types/walletAuth";
// import nextBase64 from "next-base64";
// import { NextRequest, NextResponse } from "next/server";
// import crypto from "crypto";
// import * as Utils from "@/functions/utils";

// export async function POST(request: NextRequest) {
//     const res = await request.json();
//     const requestJson: WalletLoginRequest = {
//         wallet: res.wallet,
//     };

//     // const result = await Database.getFromDB<PrivateWallet>(
//     //     process.env.NODE_ENV == "production" ? "Zampfia" : "ZampfiaDev",
//     //     "WalletAuth",
//     //     "address",
//     //     wallet.address
//     // );
//     // if (requestJson.password != result.password) {
//     //     return new NextResponse("Incorrect credentials", {
//     //         status: 401
//     //     })
//     // };
//     // const hash = nextBase64.decode(wallet.hash);
//     // const decodedHash = await Utils.decryptIdentification(result.identification, result.salt, wallet.secretKey);
//     // if (decodedHash != hash) {
//     //     return new NextResponse("Incorrect credentials", {
//     //         status: 401
//     //     })
//     // };
//     // const publicKey = Utils.intersectStrings(wallet.publicKey, result.rsaPublicKey);
//     // const encrpytedMessage = crypto.publicEncrypt(
//     //     {
//     //         key: publicKey,
//     //         padding: crypto.constants.RSA_PKCS1_OAEP_PADDING
//     //     },
//     //     Buffer.from(result.message)
//     // )
//     // const message = crypto.publicDecrypt(
//     //     {
//     //         key: result.rsaPrivateKey,
//     //         padding: crypto.constants.RSA_PKCS1_OAEP_PADDING
//     //     },
//     //     encrpytedMessage
//     // )
//     // if (message.toString() == result.message) {
//     return new NextResponse("Logged-in", {
//         status: 200,
//     });
//     // } else {
//     //     return new NextResponse("Incorrect credentials", {
//     //         status: 401
//     //     })
//     // }
// }
