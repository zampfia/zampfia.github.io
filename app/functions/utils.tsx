export const xorStrings = (a: string, b: string) => {
    var s = "";
    for (var i = 0; i < Math.max(a.length, b.length); i++) {
        s += String.fromCharCode(
            (a.charCodeAt(i) || 0) ^ (b.charCodeAt(i) || 0),
        );
    }
    return s;
};

export const intersectStrings = (a: string, b: string) => {
    var s = "";
    for (var i = 0; i < Math.max(a.length, b.length) * 2; i++) {
        s += i % 2 == 0 ? a[s.length / 2] : b[Math.floor(s.length / 2)];
    }
    return s;
};

export function deintersectStrings(a: string): { s: string; t: string } {
    var s = "";
    var t = "";
    for (var i = 0; i < a.length; i++) {
        if (i % 2 == 0) {
            s += a[i];
        } else {
            t += a[i];
        }
    }
    return { s, t };
}

export async function encryptIdentification(
    hash: string,
    salt: string,
    key: string,
) {
    const encodedHash = new TextEncoder().encode(hash);
    const secretKey = await crypto.subtle.importKey(
        "raw",
        Buffer.from(key, "base64"),
        {
            name: "AES-GCM",
            length: 256,
        },
        true,
        ["encrypt", "decrypt"],
    );
    const encryptedHash = await crypto.subtle.encrypt(
        { name: "AES-GCM", iv: Buffer.from(salt, "base64") },
        secretKey,
        encodedHash,
    );
    const identification = Buffer.from(encryptedHash).toString("base64");
    return identification;
}

export async function decryptIdentification(
    encrypted: string,
    salt: string,
    key: string,
) {
    const secretKey = await crypto.subtle.importKey(
        "raw",
        Buffer.from(key, "base64"),
        {
            name: "AES-GCM",
            length: 256,
        },
        true,
        ["encrypt", "decrypt"],
    );
    const identification = await crypto.subtle.decrypt(
        {
            name: "AES-GCM",
            iv: Buffer.from(salt, "base64"),
        },
        secretKey,
        Buffer.from(encrypted, "base64"),
    );
    return new TextDecoder().decode(identification);
}
