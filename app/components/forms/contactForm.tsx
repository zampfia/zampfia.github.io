"use client";

import * as FormFields from "./formQueries";
import "@/styles/form.css";
import { ContactFormResponse } from "../types/contactFormResponse";

const ContactForm = ({ close }) => {
    var sending = false;

    const handler = async (event) => {
        event.preventDefault();
        sending = true;
        var responseStatus;

        const response: ContactFormResponse = {
            name: event.target.name.value,
            surname: event.target.surname.value,
            email: event.target.email.value,
            country: event.target.country.value,
            subject: event.target.subject.value,
            message: event.target.message.value,
        };

        await fetch("/api/contactForm", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(response),
        }).then((res) => (responseStatus = res));
        responseStatus = responseStatus.status;
        if (responseStatus === 200) {
            close();
            alert("MESSAGGIO ARRIVATO! RISPONDEREMO IL PIU' TARDI POSSIBILE");
        } else if (responseStatus === 500) {
            close();
            alert(
                "ESSERCI PROBLEMI! CONTATTARE ASSISTENZA TECNICA VIA POSTA ALL'INDIRIZZO Longyearbyen 9170, Svalbard e Jan Mayen, Norvegia!",
            );
        } else {
            close();
            alert(
                "ALLARME ALLARME ALLARME ALLARME ALLARME ALLARME ALLARME ALLARME ALLARME ALLARME ALLARME ALLARME ALLARME ALLARME ALLARME ALLARME",
            );
        }
        sending = false;
    };

    return (
        <div className="z-[999] flex items-center justify-center bg-[rgb(0,0,0,0.35)] xs:absolute minxs:fixed minxs:bottom-0 minxs:top-0 minxs:h-[100%] minxs:w-[100%]">
            <div className="rounded-[5px] bg-white p-[20px] drop-shadow-[0_2px_5px_rgba(0,0,0,0.2)] xs:m-auto xs:flex xs:flex-col xs:overflow-y-scroll xs:bg-[rgb(246,248,250)]">
                <div className="flex">
                    <text className="label text-[22px] font-extrabold xs:text-[16px] minxs:pr-96">
                        Contattaci
                    </text>
                    <button
                        className="close-form-button absolute right-5 top-4 order-last"
                        onClick={close}
                    />
                </div>
                <text className="label justify-start text-[18px] leading-5 xs:text-sm xs:leading-6">
                    Per quasiasi cosa contattateci attraverso questo modulo o{" "}
                    <br />
                    mandando email a
                </text>
                <a
                    className="label link justify-start text-[18px] leading-5 xs:text-sm xs:leading-6"
                    href="mailto:contact@zampfia.onmicrosoft.com"
                >
                    contact@zampfia.onmicrosoft.com
                </a>
                <text className="label justify-start text-[17px] font-bold leading-5 xs:text-sm xs:leading-6">
                    Tutte le informazioni immesse devono essere "verissime"
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
                            <FormFields.CountryField
                                label="Nazione/Pianeta/Papa"
                                field_id="country"
                            />
                        </div>
                        <hr className="mb-4 mt-5" />
                        <div className="gap-1">
                            <FormFields.TextField
                                label="Oggetto"
                                id="subject"
                                classes="max-w-sm"
                                input_classes="max-w-sm"
                                required
                            />
                            <FormFields.TextAreaField
                                label="Messaggio"
                                id="message"
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
        </div>
    );
};

export default ContactForm;
