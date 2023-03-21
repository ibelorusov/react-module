import './basketCard.css';
import { useDispatch } from 'react-redux';
import { removeProductBasket } from '../../../store/reducers/basket';
import { v4 as uuidv4 } from 'uuid'


function BasketCard({ url, title, price, id }) {

    const dispatch = useDispatch()  
    const handelAddOrder = () => {
        dispatch(removeProductBasket(id))
  }
  
    return (
        <div className="basketCard">
            <img className="basketCard__preview" src={url} alt="" />
            <div className="cont">
                <div className="basketCard__title">{title}</div>
                <div className="price1">
                    <div className="price">{price} ₽</div>
                    <button className="basket-btn" onClick={handelAddOrder}>X</button>
                </div>
            </div>
        </div>
    );
}

export default BasketCard;