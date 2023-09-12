import "../../styles/giudici.css";
import Image from "next/image";

const Zampa = () => {
    return (
        <div className="flexdiv normal">
            <Image
                id="image"
                src="/photos/zampa6.jpg"
                width={500}
                height={300}
                alt="Giudice Zampa"
            />
            <div className="leftchilddiv">
                <h4 id="header">
                    Il Giudice <i>Zampa</i>
                </h4>
                <text id="text">
                    Uno dei migliori nel settore mondiale culinario.
                    <br />
                    Rinomato nel mondo per la sua esperienza di assaggiatore per
                    la Regina Elisabetta
                </text>
            </div>
        </div>
    );
};

export default Zampa;
