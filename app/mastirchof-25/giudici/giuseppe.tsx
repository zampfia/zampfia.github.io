import "../../styles/giudici.css";
import Image from "next/image";

const Giuseppe = () => {
    return (
        <div className="flexdiv normal">
            <Image
                id="image"
                src="/photos/giuseppe.png"
                width={500}
                height={300}
                alt="Giudice Una Persona A Caso Trovata Per Strada (nome vero Giuseppe De Giuseppi)"
            />
            <div className="leftchilddiv">
                <h4 id="header">
                    Il Giudice <i>Una Persona A Caso Trovata Per Strada</i>{" "}
                    (nome vero <i>Giuseppe De Giuseppi</i>){" "}
                </h4>
                <text id="text">
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
