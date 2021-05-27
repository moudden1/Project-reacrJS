import Header from './Components/Header';
import logo from './assets/logo1.png'
import ShoppingList from './Components/ShoppingList';
import Footer from './Components/Footer';
import Cart from './Components/Cart';
import { useState } from 'react';
import Categories from './Components/Categories';

function App() {
  const [cart, updateCart] = useState([]);
  const [aff, afficher] = useState(false);
  const [selectValue, setSelectValue] = useState(false); 
    return (
    <div className="App">
      <Header>
      <img src={logo} className='Imj-logo' alt="test"/>
                    <h1 className='Imj-title'>La maison jungle</h1>
      </Header>
      <Cart  cart={cart} updateCart={updateCart}/>
      <Categories aff={aff} afficher={afficher} selectValue={selectValue} setSelectValue={setSelectValue}/>
      {aff==true ? <ShoppingList selectValue={selectValue} cart={cart} updateCart={updateCart}/> : null }
      <Footer />
    </div>
  )
}

export default App;
