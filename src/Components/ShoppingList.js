import React from "react"
import {plantList} from "../datas/plantList"
import '../styles/ShoppingList.css'
import PlantItem from "./PlantItem"


const ShoppingList = ({selectValue, cart, updateCart}) => {
    console.log(selectValue);
         const plantListCat = selectValue ? plantList.filter((plant) => plant.category == selectValue) : plantList;

    console.log(plantListCat);
    function addToCart(currentPlant){   
        const isHerethisPlant = cart.find((plant) => plant.name == currentPlant.name )
        if(isHerethisPlant)
        {
            currentPlant.amount ++;
            updateCart([...cart]);   
        }
        else
        {
            currentPlant.amount = 1;
            updateCart([...cart, currentPlant]);
        }
    }
    return(
        <>
         
            <ul className='Imj-plant-list'>
                            {plantListCat.map((plant) => <div><PlantItem name={plant.name} cover={plant.cover} id={plant.id} light={plant.light} water={plant.water} price={plant.price}/>
                                            <button onClick={() => addToCart(plant)}>Ajouter</button>
                                            </div>
                            )}
               </ul>
            </>
    )
}

export default ShoppingList