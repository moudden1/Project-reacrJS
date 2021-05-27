import React from 'react'
import {plantList} from "../datas/plantList"

const Categories = ({aff, afficher,selectValue,setSelectValue})=>{
    const category = plantList.reduce((acc,plant) => acc.includes(plant.category) ? acc : acc.concat(plant.category),[])
    function selectCategorie(e){
        const choice = e.target.selectedIndex;
        console.log(e.target.options[choice].value);
        setSelectValue(e.target.options[choice].value);
        afficher(true);

    }
    return (
        <div>
        <select onChange={(e)=>selectCategorie(e)}>
        {category.map((categorie) => <option key={categorie}>{categorie}</option>)}
        <option key="vide"> </option>
        </select>
        <button onClick={()=>setSelectValue(false)} className=''>Reinitialiser</button>

        </div>
    )
}

export default Categories