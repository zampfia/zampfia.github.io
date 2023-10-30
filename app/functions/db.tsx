import { Document, MongoClient } from "mongodb";

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

export async function getFromDB<T>(
    db: string,
    collect: string,
    searchField: string,
    fieldEntry: string,
) {
    const client = new MongoClient(uri);
    try {
        const database = client.db(db);
        const collection = database.collection(collect);
        const agg = [
            {
                $search: {
                    text: {
                        query: fieldEntry,
                        path: searchField,
                    },
                },
            },
            {
                $limit: 1,
            },
        ];
        let cursor = collection.aggregate(agg);
        var prevresult: Document;
        await cursor.forEach(function (doc) {
            prevresult = doc;
        });
        const result = prevresult;
        return result as T;
    } finally {
        await client.close();
    }
}

export async function getDocCountFromDB(db: string, collect: string) {
    const client = new MongoClient(uri);
    try {
        const database = client.db(db);
        const collection = database.collection(collect);
        const result = await collection.countDocuments();
        return result;
    } finally {
        await client.close();
    }
}
