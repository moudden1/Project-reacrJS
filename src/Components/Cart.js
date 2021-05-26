import React, { useState } from "react"
import '../styles/Cart.css'
function Cart({cart, updateCart}){
const [isOpen, setIsOpen] = useState(false);
const total = cart.reduce((acc, plant) => acc+plant.amount*plant.price, 0);
console.log(cart);
function Reinitialiser(){
    updateCart([]);
}
return isOpen ? (
        <div className="Imj-cart">
                <button onClick={()=>setIsOpen(false)} className='Imj-cart-toggle-button'>Fermer le panier</button>

            <h2>panier</h2>
            <ul>
            {
                    cart.length ? cart.map((plantCurrent) => <li key={plantCurrent.id}>{plantCurrent.name} * {plantCurrent.amount} = {plantCurrent.price*plantCurrent.amount}</li>) : null
            }
            </ul>
            <h3>Total  : {total}€</h3>
            <button onClick={Reinitialiser} className=''>Reinitialiser</button>
        </div>
    ) : (<div><button onClick={()=>setIsOpen(true)} className='Imj-cart-closed'>Ouvrir le panier</button></div>)
}

export default Cart