"use client";

import { useRouter } from "next/navigation";
import * as FormFields from "../formQueries";
import "@/styles/form.css";

const LoginForm = ({ redirect, name }) => {
    var sending = false;
    const router = useRouter();

    const handler = async (event) => {
        event.preventDefault();
        sending = true;
        var response: Response;
        var responseStatus;

        const request = {
            username: event.target.username.value,
            password: event.target.password.value,
        };

        await fetch("/api/admin/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(request),
        }).then((res) => (response = res));
        responseStatus = response.status;

        if (responseStatus === 200) {
            router.push(redirect);
        } else if (responseStatus === 401) {
            alert("Credenziali Sbagliate");
        } else if (responseStatus === 404) {
            alert("NON C'E' ACCOUNT CON QUESTA EMAIL");
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
                Esegui il login per ottenere accesso al meraviglioso "{name}"
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
                        Accedi
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
