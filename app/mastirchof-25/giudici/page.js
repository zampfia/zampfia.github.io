import Layout from '../../layoutMenu';
import "../../styles/giudici.css"
import Image from 'next/image';

export const metadata = {
    title: "I Giudici di Mastirchof 25",
};

export default function Giudici() {
    return(
        <div>
            <Layout>
            </Layout>
            <h1 className='center' id="title">Ecco i Giudici di Mastirchof 25</h1>
            <div className='flexdiv normal'>
                <Image id="image" src="../../../photos/zampa6.jpg" width={500} height={300} alt="Giudice Zampa"/>
                <div className='childdiv'>
                    <h4 id="header">Il Giudice <i>Zampa</i></h4>
                    <text id='text'>Uno dei migliori nel settore mondiale culinario.<br/>Rinomato nel mondo per la sua esperienza di assaggiatore per la Regina Elisabetta</text>
                </div>
            </div>
            <div className='flexdiv right'>
                <Image id="image" className='rightimage' src="../../../photos/gigi.png" width={500} height={300} alt="Giudice Zampa"/>
                <div className='childdiv'>
                    <h4 id="header">Il Giudice <i>Gigi</i></h4>
                    <text id='text'>Fratello del Giudice Zampa. Rinomato nel mondo per la grande intelligenza culinaria</text>
                </div>
            </div>
            <div className='flexdiv normal'>
                <Image id="image" src="../../../photos/fratelli bufala.png" width={500} height={300} alt="Giudice Zampa"/>
                <div className='childdiv'>
                    <h4 id="header">I Giudici <i>Fratelli Bufala</i></h4>
                    <text id='text'>La coppia di cuochi migliore di Italia. Hanno cucinato per tutti i grandi del mondo (come Zampa, il Monte Everest e la Statua dell'Unita in India)</text>
                </div>
            </div>
            <div className='flexdiv right'>
                <Image id="image" className='rightimage' src="../../../photos/franco.png" width={500} height={300} alt="Giudice Zampa"/>
                <div className='childdiv'>
                    <h4 id="header">Il Giudice <i>Franco</i></h4>
                    <text id='text'><i>Franco</i></text>
                </div>
            </div>
            <div className='flexdiv normal'>
                <Image id="image" src="../../../photos/giuseppe.png" width={500} height={300} alt="Giudice Zampa"/>
                <div className='childdiv'>
                    <h4 id="header">Il Giudice <i>Una Persona A Caso Trovata Per Strada</i> (nome vero <i>Giuseppe De Giuseppi</i>) </h4>
                    <text id='text'>Una Persona A Caso Trovata Per Strada (nome vero Giuseppe De Giuseppi) è un famoso critico di cucina. Il suo nome (Una Persona A Caso Trovata Per Strada (nome vero Giuseppe De Giuseppi)) è riconosciuto in tutta la galassia</text>
                </div>
            </div>
        </div>
    )
}
