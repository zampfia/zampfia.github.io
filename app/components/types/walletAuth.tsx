export type PrivateWallet = {
    address: string;
    identification: string;
    salt: string;
    rsaPrivateKey: string;
    rsaPublicKey: string;
    message: string;
    password: string;
};

export type PublicWalletAuth = {
    address: string;
    hash: string;
    publicKey: string;
    secretKey: string;
    salt: string;
};

export type WalletRegister = {
    name: string;
    surname: string;
    email: string;
    password?: string;
    address?: string;
    id?: number;
    salt?: string;
};

export type WalletLoginRequest = {
    wallet: string;
};
