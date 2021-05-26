import Header from './Components/Header';
import logo from './assets/logo1.png'
import ShoppingList from './Components/ShoppingList';
import Footer from './Components/Footer';
import Cart from './Components/Cart';
import { useState } from 'react';

function App() {
  const [cart, updateCart] = useState([]);
  return (
    <div className="App">
      <Header>
      <img src={logo} className='Imj-logo' alt="test"/>
                    <h1 className='Imj-title'>La maison jungle</h1>
      </Header>
      <Cart  cart={cart} updateCart={updateCart}/>
      <ShoppingList cart={cart} updateCart={updateCart}/>
      <Footer />
    </div>
  );
}

export default App;
