import './card.css';
import {useDispatch, useSelector} from "react-redux";
import { addProduct } from '../../../store/reducers/basket'
import {v4 as uuidv4} from 'uuid'
import { Link } from 'react-router-dom';
import { openProductPage } from '../../../store/reducers/cardPage';
import {useNavigate} from "react-router-dom";

  function Card ({url, title, description, price, weight, id }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isCorrectEnter = useSelector(state => state.entrance.isCorrectEnter);
    const handelAddProduct = (e) => {
      if (isCorrectEnter) {
      let item = {
        id: id,
        url: url,
        title: title,
        price: price,
        description: description,
        weight: weight
      }
      dispatch(addProduct(item))
     
    } else {
      navigate("/Authorization");
  } e.preventDefault()
};


    const handelOpenProductPage = () => {
      let item = {
        id: id,
        url: url,
        title: title,
        price: price,
        description: description,
        weight: weight
      }
      dispatch(openProductPage(item))
    }

    return (
    <div className="card-block">
      <div className="card">
        <img onClick={handelOpenProductPage} className="card_preview" src={url} alt="" />
        <div onClick={handelOpenProductPage} className="card_title">{title}</div>
        <div onClick={handelOpenProductPage} className="card_description">{description}</div>
        <div className="price">
          <div className="price_1">
            <div className="cost">{price} ₽ /</div>
            <div className="weight">{weight}</div>
          </div>
          <button className="btn" onClick={handelAddProduct}>+</button>
        </div>
      </div>
    </div>
  );
}

export default Card;