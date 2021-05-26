import React from "react"
import CareScale from "./CareScale"
import '../styles/PlantItem.css'



const PlantItem = ({id, cover, name, water, light,price}) => {
    function handleClick(e){
        console.log(e);
    }
    return(
            <li key={id} className='Imj-plant-item' onClick={handleClick}>
                <img src={cover} alt="mdr" className="Imj-plant-item-cover"/>
                {name}
                <br />
                {price}
                            <CareScale careType='water' scaleValue={water}/>
                            <CareScale careType='light' scaleValue={light}  />
                        
            </li>
    )
}

export default PlantItem