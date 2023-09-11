import Layout from "../components/layoutMenu";
import "../styles/privacy.css"

export default function Privacy() {
    return(
        <div>
            
            <div className="margin">
                <h1 id="title">Privacy Policy</h1>
                <div className="childdiv">
                    <h3>Che dati otteniamo?</h3>
                    <text>Otteniamo le seguenti informazioni:</text>
                    <ul>
                        <li>Informazioni identificativi (Nome, email, etc..)</li>
                    </ul>
                    <h3>Per cosa usiamo i tuoi dati?</h3>
                    <text>Usiamo i tuoi dati per:</text>
                    <ul>
                        <li>Fornire i nostri servizi</li>
                        <li>Offrire servizi personalizzati</li>
                    </ul>
                    <h3>Come otteniamo i tuoi dati?</h3>
                    <text>Otteniamo i tuoi dati attreverso:</text>
                    <ul>
                        <li>Moduli inviati da te</li>
                    </ul>
                    <h3>Dove conserviamo i tuoi dati?</h3>
                    <text>Vengono conservati in database offerti da <a href="https://www.mongodb.com/atlas">MongoDB Atlas</a></text>
                    <h3>A che cosa hai diritto di fare?</h3>
                    <text>Ogni utente ha concesso i seguenti diritti sui propri dati:</text>
                    <ul>
                        <li>Diritto di accedere ai propri dati</li>
                        <li>Diritto di modificare i propri dati</li>
                        <li>Diritto di cancellare i propri dati</li>
                    </ul>
                    <text>Per qualasiasi richiesta inviare email a: <a href="mailto:legal@zampfia.onmicrosoft.com">legal@zampfia.onmicrosoft.com</a></text>
                </div>
            </div>
        </div>
    )
}