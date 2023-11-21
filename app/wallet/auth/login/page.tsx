"use client";

import LoginForm from "@/components/forms/walletAuth/loginForm";
import { useCookies } from "next-client-cookies";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const LoginPage = () => {
    const cookies = useCookies();
    if (cookies.get("token") === undefined) {
        useRouter().push(
            "/auth?redirect=/wallet/auth/login&name=Magico Portafoglio",
        );
    }
    useEffect(() => {
        getUser();
    }, []);

    const getUser = async () => {
        var userRes: Response;
        await fetch("/api/admin/auth/authenticate?perms=experimental&", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((res) => (userRes = res));
        if (userRes.status === 404) {
            alert("TUO TOKEN SU TUO BROWSER NON ESSERE IN NOSTRO DATABASE");
            cookies.remove("token");
            window.location.reload();
        } else if (userRes.status === 403) {
            alert("TU NON AVERE PERMESSI. BUTTARTI FUORI IO");
            cookies.remove("token");
            window.location.reload();
        } else if (userRes.status === 500) {
            alert(
                "ESSERCI PROBLEMI! CONTATTARE ASSISTENZA TECNICA VIA POSTA ALL'INDIRIZZO Longyearbyen 9170, Svalbard e Jan Mayen, Norvegia!",
            );
        } else if (userRes.status != 200) {
            alert(
                "ALLARME ALLARME ALLARME ALLARME ALLARME ALLARME ALLARME ALLARME ALLARME ALLARME ALLARME ALLARME ALLARME ALLARME ALLARME ALLARME ",
            );
        }
    };

    return (
        <div className="margin">
            <LoginForm />
        </div>
    );
};

export default LoginPage;
