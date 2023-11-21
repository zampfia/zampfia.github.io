import { PrismaClient } from "@prisma/client";
const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;

export enum Forms {
    CONTACTING = "contacting",
    ZAMPAVINTI = "zampaVinti",
}

// const uri = process.env.MONGODB_URI;

// export async function insertToDB<T>(collect: , doc: T) {
// const collection = await prisma.

// const client = new MongoClient(uri);
// try {
//     const database = client.db(db);
//     const collection = database.collection(collect);
//     const result = await collection.insertOne(doc);
//     return result ? true : false;
// } finally {
//     await client.close();
// }
// }

// export async function getFromDB<T>(
//     collect: string,
//     searchField: string,
//     fieldEntry: string,
// ) {
//     const client = new MongoClient(uri);
//     try {
//         const database = client.db(db);
//         const collection = database.collection(collect);
//         const agg = [
//             {
//                 $search: {
//                     text: {
//                         query: fieldEntry,
//                         path: searchField,
//                     },
//                 },
//             },
//             {
//                 $limit: 1,
//             },
//         ];
//         let cursor = collection.aggregate(agg);
//         var prevresult: Document;
//         await cursor.forEach(function (doc) {
//             prevresult = doc;
//         });
//         const result = prevresult;
//         return result as T;
//     } finally {
//         await client.close();
//     }
// }

// export async function getDocCountFromDB(collect: string) {
//     const client = new MongoClient(uri);
//     try {
//         const database = client.db(db);
//         const collection = database.collection(collect);
//         const result = await collection.countDocuments();
//         return result;
//     } finally {
//         await client.close();
//     }
// }
