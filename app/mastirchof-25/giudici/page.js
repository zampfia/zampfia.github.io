import Layout from '../../layoutMenu';
import "app/styles/giudici.css";
import Zampa from "./zampa.js";
import Gigi from "./gigi.js";
import Bufala from "./bufala.js";
import Franco from "./franco.js";
import Giuseppe from "./giuseppe.js";

export const metadata = {
    title: "I Giudici di Mastirchof 25",
};

export default function Giudici() {
    return(
        <div>
            <Layout>
            </Layout>
            <h1 className='center' id="title">Ecco i Giudici di Mastirchof 25</h1>
            <Zampa>
            </Zampa>
            <Gigi>
            </Gigi>
            <Bufala>
            </Bufala>
            <Franco>
            </Franco>
            <Giuseppe>
            </Giuseppe>
        </div>
    )
}
