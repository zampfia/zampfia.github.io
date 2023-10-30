"use client";

import { WalletLoginRequest } from "@/components/types/walletAuth";
import * as FormFields from "../formQueries";
import "@/styles/form.css";
// import bcryptjs from "bcryptjs";

const LoginForm = () => {
    var sending = false;

    const handler = async (event) => {
        event.preventDefault();
        sending = true;
        var response: Response;
        var responseStatus;
        // let password;

        // await bcryptjs.hash(event.target.password.value, 12).then(hash => password = hash)

        const request: WalletLoginRequest = {
            wallet: Buffer.from(
                event.target.file.files[0].arrayBuffer(),
            ).toString("base64"),
        };

        await fetch("/api/wallet/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(request),
        }).then((res) => (response = res));
        responseStatus = response.status;

        if (responseStatus === 200) {
            alert("Accesso riuscito");
        } else if (responseStatus === 401) {
            alert("Credenziali Sbagliate");
        } else if (responseStatus === 500) {
            alert(
                "ESSERCI PROBLEMI! CONTATTARE ASSISTENZA TECNICA VIA POSTA ALL'INDIRIZZO Longyearbyen 9170, Svalbard e Jan Mayen, Norvegia!",
            );
        } else {
            alert(
                "ALLARME ALLARME ALLARME ALLARME ALLARME ALLARME ALLARME ALLARME ALLARME ALLARME ALLARME ALLARME ALLARME ALLARME ALLARME ALLARME ",
            );
        }
        sending = false;
    };

    return (
        <div className="px-[25rem]">
            <text className="label text-[24px] font-extrabold xs:text-[16px] minxs:pr-96">
                Login
            </text>
            <text className="label justify-start text-[18px] leading-7 xs:text-sm xs:leading-8">
                Esegui il login per ottenere accesso al meraviglioso
                "ZampaPortafoglio"
            </text>
            <form onSubmit={handler}>
                <div className="grid">
                    <div className="grid grid-cols-2 gap-1">
                        <FormFields.TextField
                            label="Password"
                            id="password"
                            placeholder="···········"
                            min={8}
                            max={30}
                            password
                            required
                        />
                        <FormFields.FileField
                            label="File del Portafoglio"
                            id="file"
                            input_classes="text-center"
                            required
                        />
                    </div>
                    <hr className="mb-4 mt-5" />
                </div>
                <button
                    type="submit"
                    className="btn mt-4 border-[rgb(120,142,158)] bg-[rgb(160,189,209)] text-black hover:border-[rgb(81,96,106)] hover:bg-[rgb(120,142,158)]"
                >
                    Invia
                </button>
            </form>
        </div>
    );
};

export default LoginForm;
