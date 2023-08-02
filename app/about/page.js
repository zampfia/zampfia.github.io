import styles from '../styles/about.module.css';
import Layout from '../layoutMenu';

export const metadata = {
    title: "Zampa è troppo bravo",
};

export default function About() {
    return(
        <div>
            <Layout>
            </Layout>
            <h1 className={styles.title}>NOI ABBIAMO TANTI SOLDI</h1>
            <text className={styles.label}>Zampa is <i><b>RE MONDUS</b></i></text>
        </div>
    )
}
