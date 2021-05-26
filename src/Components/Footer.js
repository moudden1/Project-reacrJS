import { useState } from 'react'
import '../styles/Footer.css'

function Footer(){
    const [inputValue, setInputValue] = useState('');

    function verif(input){
        console.log(input);
        if(!input.includes('@'))
        {
            alert('Attention, il n\'y a pas d\'@, ceci n\'est pas une adresse valide.');
        }
    }
    return (
        <footer className='Imj-footer'>
            <div className='Imj-footer-elem'>
                Pour les passionné(e)s de plantes
            </div>
            <div className='Imj-footer-elem'>Laissez-nous votre mail : <input value={inputValue} onChange={(e)=>setInputValue(e.target.value)} onBlur={()=>verif(inputValue)}/></div>
        </footer>
    )
}

export default Footer