import 'app/styles/about.css';
import Layout from '../layoutMenu';

export const metadata = {
    title: "Zampa è troppo bravo",
};

export default function About() {
    return(
        <div>
            <Layout>
            </Layout>
            <h1 className="title">NOI ABBIAMO TANTI SOLDI</h1>
            <text className="label">Zampa is <i><b>RE MONDUS</b></i></text>
        </div>
    )
}
