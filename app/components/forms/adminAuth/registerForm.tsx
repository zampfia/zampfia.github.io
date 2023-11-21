"use client";

import * as FormFields from "../formQueries";
import Link from "next/link";
import "@/styles/form.css";
import { useRouter } from "next/router";

const RegisterForm = () => {
    var sending = false;

    const handler = async (event) => {
        event.preventDefault();
        sending = true;
        var response: Response;
        var responseStatus;

        const request = {
            username: event.target.username.value,
            password: event.target.password.value,
        };

        await fetch("/api/admin/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(request),
        }).then((res) => (response = res));
        responseStatus = response.status;

        if (responseStatus === 200) {
            useRouter().push("/admin");
        } else if (responseStatus === 432) {
            alert("ESISTE GIA' ACCOUNT CON QUESTO USERNAME");
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
                Crea il tuo account per ottenere accesso al meraviglioso
                "Portale delle conoscenze"
            </text>
            <form onSubmit={handler}>
                <div className="grid">
                    <div className="grid grid-cols-2 gap-1">
                        <FormFields.TextField
                            label="Username"
                            id="username"
                            required
                        />
                        <FormFields.TextField
                            label="Password"
                            id="password"
                            min={8}
                            max={30}
                            password
                            required
                        />
                    </div>
                    <hr className="mb-4 mt-5" />
                </div>
                <div className="flex flex-row">
                    <button
                        type="submit"
                        className="btn right-auto mt-1 border-[rgb(120,142,158)] bg-[rgb(160,189,209)] text-black hover:border-[rgb(81,96,106)] hover:bg-[rgb(120,142,158)]"
                    >
                        Registrati
                    </button>
                    <Link
                        href="/admin"
                        className="label ml-4 text-xl font-bold"
                    >
                        Fai il login
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default RegisterForm;
