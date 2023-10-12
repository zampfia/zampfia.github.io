import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

export async function insertToDB<T>(db: string, collect: string, doc: T) {
    const client = new MongoClient(uri);
    try {
        const database = client.db(db);
        const collection = database.collection(collect);
        const result = await collection.insertOne(doc);
        return result ? true : false;
    } finally {
        await client.close();
    }
}
