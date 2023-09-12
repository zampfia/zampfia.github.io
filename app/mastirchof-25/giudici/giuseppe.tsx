import Image from "next/image";

const Giuseppe = () => {
    return (
        <div className="grid grid-cols-4 grid-rows-1 xs:flex">
            <Image
                className="mb-3 max-h-[300px] max-w-[500px] xs:max-h-[150px] xs:max-w-[150px]"
                src="/photos/giuseppe.png"
                width={500}
                height={300}
                alt="Giudice Una Persona A Caso Trovata Per Strada (nome vero Giuseppe De Giuseppi)"
            />
            <div className="ml-[3.5rem] flex flex-col justify-center text-left xs:mb-3 xs:ml-3">
                <h4 className="mb-1 text-2xl font-bold xs:text-base">
                    Il Giudice <i>Una Persona A Caso Trovata Per Strada</i>{" "}
                    (nome vero <i>Giuseppe De Giuseppi</i> )
                </h4>
                <text className="text-[19px] xs:text-[12px]">
                    Una Persona A Caso Trovata Per Strada (nome vero Giuseppe De
                    Giuseppi) è un famoso critico di cucina. Il suo nome (Una
                    Persona A Caso Trovata Per Strada (nome vero Giuseppe De
                    Giuseppi)) è riconosciuto in tutta la galassia
                </text>
            </div>
        </div>
    );
};

export default Giuseppe;
