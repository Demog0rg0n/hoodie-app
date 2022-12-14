import { Routes, Route } from 'react-router-dom'

import Header from './components/Header';

import './assets/styles/general.css'

import Catalog from './pages/Catalog';
import Cart from './pages/Cart';
import Home from './pages/Home'

function App() {
  return (
  <div className='wrapper'>
    <Header />
    <div className="content_bottom">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  </div>
  );
}

export default App;
