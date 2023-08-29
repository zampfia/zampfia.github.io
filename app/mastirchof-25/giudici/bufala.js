import "../../styles/giudici.css"
import Image from 'next/image';

const Bufala = () => {  
    return (
        <div className='flexdiv normal'>
            <Image id="image" src="/photos/fratelli bufala.png" width={500} height={300} alt="Giudici Fratelli Bufala"/>
            <div className='leftchilddiv'>
                <h4 id="header">I Giudici <i>Fratelli Bufala</i></h4>
                <text id='text'>La coppia di cuochi migliore di Italia. Hanno cucinato per tutti i grandi del mondo (come Zampa, il Monte Everest e la Statua dell'Unita in India)</text>
            </div>
        </div>
    ) 
}
export default Bufala;