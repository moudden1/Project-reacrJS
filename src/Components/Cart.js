import React, { useState } from "react"
import '../styles/Cart.css'
function Cart({cart, updateCart}){
const monsteraPrice = 8;
const [isOpen, setIsOpen] = useState(false);
const total = cart.reduce((acc, plant) => acc+plant.amount*plant.price, 0);
console.log(cart);

return isOpen ? (
        <div className="Imj-cart">
                <button onClick={()=>setIsOpen(false)} className='Imj-cart-toggle-button'>Fermer le panier</button>

            <h2>panier</h2>
                <div>Monstera : {monsteraPrice}€</div>
            <h3>Total  : {monsteraPrice*cart}€</h3>
            <button onClick={()=>updateCart(0)} className=''>Reinitialiser</button>
        </div>
    ) : (<div><button onClick={()=>setIsOpen(true)} className='Imj-cart-closed'>Ouvrir le panier</button></div>)
}

export default Cart