import React from "react"
import {plantList} from "../datas/plantList"
import '../styles/ShoppingList.css'
import PlantItem from "./PlantItem"


const ShoppingList = ({cart, updateCart}) => {
    const category = plantList.reduce((acc,plant) => acc.includes(plant.category) ? acc : acc.concat(plant.category),[])
    console.log(category);
    function addToCart(currentPlant){   
        const isHerethisPlant = cart.find((plant) => plant.name == currentPlant.name )
        if(isHerethisPlant)
        {
            currentPlant.amount ++;
            updateCart([...cart]);   
        }
        else
        {
            updateCart([...cart, currentPlant]);
        }
    }
    return(
        <>
            <ul>
                            {category.map((categorie) => <li key={categorie}>{categorie}</li>)}
            </ul>
            <ul className='Imj-plant-list'>
                            {/*plantList.map((plant) => (<li key={plant.id} className='lmj-plant-item'>{plant.name}{plant.isBestSale && <div className='lmj-sales'>soldes</div>}
                            <CareScale careType='water' scaleValue={plant.water} />
                            <CareScale careType='light' scaleValue={plant.light} />
                            </li>)) */}
                            {plantList.map((plant) => <div><PlantItem name={plant.name} cover={plant.cover} id={plant.id} light={plant.light} water={plant.water} price={plant.price}/>
                                            <button onClick={() => addToCart(plant)}>Ajouter</button>
                                            </div>
                            )}
               </ul>
            </>
    )
}

export default ShoppingList