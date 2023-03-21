import './dishCard.css';
import {useDispatch, useSelector} from "react-redux";
import { addProduct } from '../../../store/reducers/basket';
import { v4 as uuidv4 } from 'uuid'
import {useNavigate} from "react-router-dom";

function DishCard({ id, url, title, description, price, weight }) {
    const dispatch = useDispatch();
    const isCorrectEnter = useSelector(state => state.entrance.isCorrectEnter);
    const navigate = useNavigate();

    const handelAddProduct = () => {
        if (isCorrectEnter) {
        let item = {
            id: uuidv4(),
            url: url,
            title: title,
            price: price,
        }
        dispatch(addProduct(item))
    } else {
        navigate("/Authorization");
    }
};

    return (
        <div className="dish">
            <img className="dish-img" src={url} alt="" />
             <div className="dish-text">
                <div className="dish-text_title">{title}</div>
                <div className="dish-text_description">{description}</div>
                <div className="dish-price">
                    <div className="dish-price_value">
                        <div className="dish-cost">{price} ₽ /</div>
                        <div className="dish-weight"> {weight}</div>
                    </div>
                    <button onClick={handelAddProduct} className="dish-btn" >В корзину</button>
                </div>
            </div>
        </div>
    );
}

export default DishCard;