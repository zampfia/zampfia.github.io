"use client";

import { Suspense, useEffect, use } from "react";
import { Contacting } from "@prisma/client";
import nextBase64 from "next-base64";
import { useCookies } from "next-client-cookies";

function ItemTree(props) {
    let info: Contacting[] = [];
    let response: Response = use(props.promise);
    const cookies = useCookies();

    if (response.status === 401) {
        alert("TUO TOKEN SU TUO BROWSER NON ESSERE IN NOSTRO DATABASE");
        cookies.remove("token");
        window.location.reload();
    } else if (response.status === 403) {
        alert("TU NON AVERE PERMESSI. BUTTARTI FUORI IO");
        cookies.remove("token");
        window.location.reload();
    } else if (response.status === 500 || response.status === 404) {
        alert(
            "ESSERCI PROBLEMI! CONTATTARE ASSISTENZA TECNICA VIA POSTA ALL'INDIRIZZO Longyearbyen 9170, Svalbard e Jan Mayen, Norvegia!",
        );
    } else if (response.status != 200) {
        alert(
            "ALLARME ALLARME ALLARME ALLARME ALLARME ALLARME ALLARME ALLARME ALLARME ALLARME ALLARME ALLARME ALLARME ALLARME ALLARME ALLARME ",
        );
    }
    let body = nextBase64.decode(use(response.text()));
    body.split(",,,").map((item) => {
        info.push(JSON.parse(item));
    });

    return (
        <ul>
            {info.map((item, i) => (
                <div>
                    <a key={i}>{item.subject}</a>
                    <hr className={`${i != info.length - 1 ? "" : "hidden"}`} />
                </div>
            ))}
        </ul>
    );
}

export default function Dashboard({ promise }) {
    var user: { username: string; email: string } = {
        username: "Loading...",
        email: "Loading...",
    };

    useEffect(() => {
        getUser();
    }, []);

    const getUser = async () => {
        var userRes: Response;
        await fetch("/api/admin/auth/authenticate", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((res) => (userRes = res));
        if (userRes.status === 401) {
            alert("TUO TOKEN SU TUO BROWSER NON ESSERE IN NOSTRO DATABASE");
        } else if (userRes.status === 500) {
            alert(
                "ESSERCI PROBLEMI! CONTATTARE ASSISTENZA TECNICA VIA POSTA ALL'INDIRIZZO Longyearbyen 9170, Svalbard e Jan Mayen, Norvegia!",
            );
        } else if (userRes.status != 200) {
            alert(
                "ALLARME ALLARME ALLARME ALLARME ALLARME ALLARME ALLARME ALLARME ALLARME ALLARME ALLARME ALLARME ALLARME ALLARME ALLARME ALLARME ",
            );
        }
        user = await userRes.json();
        document
            .querySelector("#username")
            .replaceChildren("BUONASERA " + user.username);
        document.querySelector("#username").className = "";
    };

    return (
        <div className="flex flex-col">
            <text id="username" className="hidden"></text>
            <Suspense fallback={<p>Loading data...</p>}>
                <ItemTree promise={promise} />
            </Suspense>
        </div>
    );
}
