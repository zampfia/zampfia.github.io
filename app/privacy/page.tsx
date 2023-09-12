import Layout from "../components/layoutMenu";
import "../styles/privacy.css";

export default function Privacy() {
    return (
        <div>
            <div className="margin">
                <h1 id="title">Privacy Poli className="li"cy</h1>
                <div className="childdiv">
                    <h3 className="header">Che dati otteniamo?</h3>
                    <text className="text">
                        Otteniamo le seguenti informazioni:
                    </text>
                    <ul className="ul">
                        <li className="li">
                            Informazioni identificativi (Nome, email, etc..)
                        </li>
                    </ul>
                    <h3 className="header">Per cosa usiamo i tuoi dati?</h3>
                    <text className="text">Usiamo i tuoi dati per:</text>
                    <ul className="ul">
                        <li className="li">Fornire i nostri servizi</li>
                        <li className="li">
                            Offrire servizi personali className="li"zzati
                        </li>
                    </ul>
                    <h3 className="header">Come otteniamo i tuoi dati?</h3>
                    <text className="text">
                        Otteniamo i tuoi dati attreverso:
                    </text>
                    <ul className="ul">
                        <li className="li">
                            Modul className="ul"i inviati da te
                        </li>
                    </ul>
                    <h3 className="header">Dove conserviamo i tuoi dati?</h3>
                    <text className="text">
                        Vengono conservati in database offerti da{" "}
                        <a href="https://www.mongodb.com/atlas">
                            MongoDB Atlas
                        </a>
                    </text>
                    <h3 className="header">A che cosa hai diritto di fare?</h3>
                    <text className="text">
                        Ogni utente ha concesso i seguenti diritti sui propri
                        dati:
                    </text>
                    <ul className="ul">
                        <li className="li">
                            Diritto di accedere ai propri dati
                        </li>
                        <li className="li">
                            Diritto di modificare i propri dati
                        </li>
                        <li className="li">
                            Diritto di cancellare i propri dati
                        </li>
                    </ul>
                    <text className="text">
                        Per qualasiasi richiesta inviare email a:{" "}
                        <a href="mailto:legal@zampfia.onmicrosoft.com">
                            legal@zampfia.onmicrosoft.com
                        </a>
                    </text>
                </div>
            </div>
        </div>
    );
}
