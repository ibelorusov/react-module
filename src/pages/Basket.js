import '../components/elements/basket/basket.css';
import BasketCard from '../components/elements/basket/basketCard';
import Btnback from '../components/ui/btnback/Btnback2';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import BtnExit from '../components/ui/btnexit/BtnExit';

function Basket() {

  const { basket, pricesProducts } = useSelector(state => state.basket)
  


  return (
    <div className="basket-page">
      <div className="basket">
        <div className="basket-header">
          <Btnback />
          <h1 className="title">Корзина с выбранными товарами</h1>
          <Link to="/Authorization">
            <div className='btnexit'><BtnExit /> </div>
          </Link>
        </div> 
        <div className="content">
        {basket.length !== 0 ? basket.map(titles => {
            const { url, title, price, id } = titles
            return (              
              <BasketCard
                id={id}
                url={url}
                title={title}
                price={price}
              />             
            )            
          })  : <p className="basket-empty">ваша корзина пуста</p>}          
        </div>
        
        </div>
      
      <div className="footer">
        <div className="footer-block">
          <div className="footer-left">
            <div className="footer_title">
              Заказ на сумму:
            </div>
            <div className="footer_sum">{pricesProducts} ₽</div>
          </div>
          <button className="footer-btn">Оформить заказ</button>
        </div>
      </div>
    </div>
  );
}

export default Basket;