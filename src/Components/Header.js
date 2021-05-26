import React, { Children } from "react"
import '../styles/Header.css'

function Header({children}){
    return(
        <div className='Imj-banner'>
            {children}
        </div>
    )
}

export default Header