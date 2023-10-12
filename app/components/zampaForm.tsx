"use client";

import * as FormFields from "./formQueries";
import "../styles/form.css";
import { ZampaFormResponse } from "./types/zampaFormResponse";

const ZampaForm = ({ close }) => {
    var sending = false;

    const handler = async (event) => {
        event.preventDefault();
        sending = true;
        var responseStatus;

        const response: ZampaFormResponse = {
            name: event.target.name.value,
            surname: event.target.surname.value,
            email: event.target.email.value,
            birthday: event.target.birthday.value,
            address: event.target.address.value,
            street_number: event.target.street_number.value,
            city: event.target.city.value,
            country: event.target.country.value,
        };

        await fetch("/api/zampaForm", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(response),
        }).then((res) => (responseStatus = res));
        responseStatus = responseStatus.status;
        if (responseStatus === 200) {
            close();
            alert(
                "DATI ARRIVATI! ASPETTARE ALTRI GIORNI LAVORATIVI PER INFORMAZIONI SU INFORMAZIONI DI SPEDIZIONE DELLE INFORMAZIONI SULLA SPEDIZIONE DEL ZAMPA VINTO PERSONALE",
            );
        } else if (responseStatus === 500) {
            close();
            alert(
                "ESSERCI PROBLEMI! CONTATTARE ASSISTENZA TECNICA VIA POSTA ALL'INDIRIZZO Longyearbyen 9170, Svalbard e Jan Mayen, Norvegia!",
            );
        } else {
            close();
            alert(
                "ALLARME ALLARME ALLARME ALLARME ALLARME ALLARME ALLARME ALLARME ALLARME ALLARME ALLARME ALLARME ALLARME ALLARME ALLARME ALLARME ",
            );
        }
        sending = false;
    };

    return (
        <div className="z-[999] flex items-center justify-center bg-[rgb(0,0,0,0.35)] xs:absolute minxs:fixed minxs:bottom-0 minxs:top-0 minxs:h-[100%] minxs:w-[100%]">
            <div className="rounded-[5px] bg-white p-[20px] drop-shadow-[0_2px_5px_rgba(0,0,0,0.2)] xs:m-auto xs:flex xs:flex-col xs:overflow-y-scroll xs:bg-[rgb(246,248,250)]">
                <div className="flex">
                    <text className="label text-[19px] font-extrabold xs:text-[16px] minxs:pr-96">
                        AVETE VINTO UN ZAMPA!!!!!
                    </text>
                    <button
                        className="close-form-button order-last xs:ml-[4rem]"
                        onClick={close}
                    />
                </div>
                <text className="label justify-start text-[13px] leading-5 xs:text-sm xs:leading-6">
                    Compilate questo questionario per ottenere un Zampa a casa{" "}
                    <span className="text-[8px] leading-[0.5rem]">
                        (fino ad esaurimento scorte)
                    </span>
                </text>
                <text className="label justify-start text-[12px] font-bold leading-5 xs:text-sm xs:leading-6">
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
                            <FormFields.DateField
                                label="Giorno di Nascita"
                                id="birthday"
                                required
                            />
                        </div>
                        <hr className="mb-4 mt-5" />
                        <div className="grid grid-cols-2 grid-rows-2 gap-1">
                            <FormFields.TextField
                                label="Indirizzo"
                                id="address"
                                placeholder="es. Via Martiri"
                                required
                            />
                            <FormFields.TextField
                                label="Numero Civico"
                                id="street_number"
                                placeholder="es. 14"
                                required
                            />
                            <FormFields.TextField
                                label="Città"
                                id="city"
                                placeholder="es. Napoli"
                                required
                            />
                            <FormFields.CountryField
                                label="Nazione/Pianeta/Papa"
                                field_id="country"
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

export default ZampaForm;
