import "../../styles/giudici.css"
import Image from 'next/image';

const Gigi = () => {  
  return (
    <div className='flexdiv right'>
      <Image id="image" className="rightimage" src="/photos/gigi.png" width={500} height={300} alt="Giudice Gigi"/>
      <div className='rightchilddiv'>
        <h4 id="header">Il Giudice <i>Gigi</i></h4>
        <text id='text'>Fratello del Giudice Zampa. Rinomato nel mondo per la grande intelligenza culinaria</text>
      </div>
    </div>
  ) 
}

export default Gigi;