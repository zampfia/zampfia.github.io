import "app/styles/giudici.css"
import Image from 'next/image';

const Gigi = () => {  
  return (
    <div className='flexdiv right'>
      <Image id="image" className="rightimage" src="public/photos/gigi.png" width={500} height={300} alt="Giudice Gigi"/>
      <div className='childdiv'>
        <h4 id="header">Il Giudice <i>Gigi</i></h4>
        <text id='text'>Fratello del Giudice Zampa. Rinomato nel mondo per la grande intelligenza culinaria</text>
      </div>
    </div>
 ) 
}

export default Gigi;