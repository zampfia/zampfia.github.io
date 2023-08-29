import "../../styles/giudici.css"
import Image from 'next/image';

const Franco = () => {  
    return (
        <div className='flexdiv right'>
            <Image id="image" className="rightimage" src="/photos/franco.png" width={500} height={300} alt="Giudice Franco"/>
            <div className='rightchilddiv'>
                <h4 id="header">Il Giudice <i>Franco</i></h4>
                <text id='text'><span style={{color:"rgb(231, 237, 241)"}}>FrancoFrancoFrancoFrancoFrancoFrancoFrancoFra</span><i>Franco</i></text>
            </div>
        </div>
    ) 
}

export default Franco;