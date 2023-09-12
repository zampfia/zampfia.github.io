import "../../styles/giudici.css";
import Zampa from "./zampa";
import Gigi from "./gigi";
import Bufala from "./bufala";
import Franco from "./franco";
import Giuseppe from "./giuseppe";

export const metadata = {
  title: "I Giudici di Mastirchof 25",
};

export default function Giudici() {
  return (
    <div>
      <div className="margin">
        <h1 className="center" id="title">
          Ecco i Giudici di Mastirchof 25
        </h1>
        <Zampa />
        <Gigi />
        <Bufala />
        <Franco />
        <Giuseppe />
      </div>
    </div>
  );
}
