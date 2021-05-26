import React from "react"
import sun from "../assets/sun.svg"
import water from "../assets/water.svg"

const CareScale = ({scaleValue, careType}) => {
    const range = [1,2,3]
    const scaleType = careType === 'light' ? <img src={sun} alt="sun"/> : <img src={water} alt="water"/>
    function need(scaletype, value){
        console.log(scaletype);
        console.log(value);
        const type = scaletype == "water" ? "d'arrosage" : "lumiere";
        const rangePlante = value == 3 ? "beaucoup" : (value == 2 ? "moderement" : "peu");
        var text = "cette plante requiert " + rangePlante +" "+ type;
        console.log(text);
    }


    return(
        <>
        {range.map((rangeElm) => scaleValue >= rangeElm ? (<span key={rangeElm.toString()}  onClick={()=>need(careType,scaleValue)}>{scaleType}</span>) : null)}
            </>
    )
}

export default CareScale