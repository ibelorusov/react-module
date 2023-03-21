import "./order.css"
import { Link } from 'react-router-dom';
import BtnExit from '../ui/btnexit/BtnExit';
import { useSelector } from 'react-redux';

function Order() {
    const { pricesProducts, countProd } = useSelector(state => state.basket)

    return (
        <div className="product-order">
        <div className="order_total">
          <div className="order_dish">{countProd} товара</div>
          <div className="order_sum">на сумму {pricesProducts} ₽</div>
        </div>
        <Link to="/Basket" style={{ textDecoration: 'none', color: `#FFFFFF`, fontFamily: 'Montserrat' }}>
          <img className="order_basket" src="../../images/basket.svg" alt="" />
        </Link>                  
        <Link to="/Authorization">
        <div className='btn-pc'><BtnExit /></div>
        </Link>
      </div>
    );
  }

  export default Order;