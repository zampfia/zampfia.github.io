import "../../styles/giudici.css";
import Image from "next/image";

const Franco = () => {
    return (
        <div className="flexdiv right">
            <div className="rightchilddiv francochilddiv">
                <h4 id="header">
                    Il Giudice <i>Franco</i>
                </h4>
                <text id="text">
                    <i>Franco</i>
                </text>
            </div>
            <Image
                id="image"
                className="rightimage"
                src="/photos/franco.png"
                width={500}
                height={300}
                alt="Giudice Franco"
            />
        </div>
    );
};

export default Franco;
