import Image from "next/image";

export default function Charity() {
    return (
        <div className="flex flex-col">
            <text className="label justify-center text-center text-3xl font-extrabold">
                Dona al Divino Zampa
            </text>
            <text className="label justify-center text-center text-xl">
                Le donazioni al Divino Zampa sono uno dei modi più facili per
                aiutare il progresso del Zampanesimo
                <br />
                Puoi farlo facilmente usando questi dati:
            </text>
            <Image
                src="/photos/bank.png"
                alt="Dati Bancari"
                className="self-center"
                width="300"
                height="350"
            />
            <text className="label justify-center text-center text-xl">
                Per qualsiasi problema contattaci che di sicuro risolviamo i
                problemi con i soldi
            </text>
        </div>
    );
}
