"use client";

import { WalletRegister } from "@/components/types/walletAuth";
import * as FormFields from "../formQueries";
import "@/styles/form.css";
import bcryptjs from "bcryptjs";

const RegisterForm = () => {
    var sending = false;

    const handler = async (event) => {
        event.preventDefault();
        sending = true;
        var response: Response;
        var responseStatus;
        var password;
        var salty;

        await bcryptjs.genSalt(12).then((salt) => (salty = salt));
        await bcryptjs
            .hash(event.target.password.value, salty)
            .then((hash) => (password = hash));

        const request: WalletRegister = {
            name: event.target.name.value,
            surname: event.target.surname.value,
            email: event.target.email.value,
            password: password,
            salt: salty,
        };

        await fetch("/api/wallet/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(request),
        }).then((res) => (response = res));
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "wallet.json";
        document.body.appendChild(a);
        a.click();
        a.remove();
        responseStatus = response.status;

        if (responseStatus === 200) {
            alert("Tieni al sicuro il file. Non può essere sostituito");
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
                Registrati
            </text>
            <text className="label justify-start text-[18px] leading-7 xs:text-sm xs:leading-8">
                Registrati per possedere i rarissimi e preziosissimi
                ZampaDollari (Z$) attraverso l'avanzatissimo e di ultima
                tecnologia "ZampaPortafoglio",
                <br /> il portafoglio "digitale" che può contenere un infinito
                valore di Z$
            </text>
            <form onSubmit={handler}>
                <div className="grid">
                    <div className="grid grid-cols-2 grid-rows-2 gap-1">
                        <FormFields.TextField
                            label="Nome"
                            id="name"
                            placeholder="es. Giuseppe"
                            required
                        />
                        <FormFields.TextField
                            label="Cognome"
                            id="surname"
                            placeholder="es. De Giuseppi"
                            required
                        />
                        <FormFields.EmailField
                            label="Email"
                            id="email"
                            placeholder="es. zampamisu@gmail.com"
                            required
                        />
                    </div>
                    <hr className="mb-4 mt-5" />
                    <div className="grid grid-cols-2 gap-1">
                        <div className="grid grid-rows-2">
                            <text className="label text-[20px] font-extrabold xs:text-[16px] minxs:pr-96">
                                Password
                            </text>
                            <text className="label text-[16px] xs:text-sm">
                                8-30 caratteri, almeno una lettera minuscola,{" "}
                                <br />
                                maiuscola e un numero
                            </text>
                        </div>
                        <FormFields.TextField
                            label="Password"
                            id="password"
                            placeholder="···········"
                            classes="self-center"
                            min={8}
                            max={30}
                            password
                            required
                        />
                    </div>
                    <hr className="mb-4 mt-5" />
                </div>
                <FormFields.PrivacyCheckField id="privacy" required />
                <FormFields.ZampacyCheckField id="zampacy" required />
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

export default RegisterForm;
