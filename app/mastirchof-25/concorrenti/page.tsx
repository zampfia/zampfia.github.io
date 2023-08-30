import Layout from '../../layoutMenu';
import "../../styles/concorrenti.css"

export const metadata = {
    title: "I Concorrenti di Mastirchof 25",
};

export default function Concorrenti() {
    return(
        <div>
            <Layout>
            </Layout>
            <div className="margin">
                <h1 id="header" className='center'>Al momento non abbiamo i risultati<br />Torna più tardi (1/2 mesi)</h1>
            </div>
        </div>
    )
}