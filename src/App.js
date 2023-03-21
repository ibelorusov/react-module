import './App.css';
import { Routes, Route } from 'react-router-dom';
import Products from './pages/Products';
import Basket from './pages/Basket';
import Authorization from './pages/Authorization';
import Registration from './pages/Registration'
import Dish from './pages/Dish';

function App() {

  return (
    <div className="App">

      <Routes>          
          <Route path='/' element={<Products />} />
          <Route path='/Authorization' element={<Authorization />} />
          <Route path='/Registration' element={<Registration />} />
          <Route path='/Dish' element={<Dish />} />    
          <Route path='/Basket' element={<Basket />} />
      </Routes>
    </div>
  );
}

export default App;
