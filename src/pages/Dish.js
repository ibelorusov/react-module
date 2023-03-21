import '../components/elements/dish/Dish.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DishCard from '../components/elements/cards/DishCard';
import Order from '../components/block/Order';

function Dish() {  
  const openProductPage = useSelector(state => state.cardPage.cardPage)
  const nav = useNavigate();
  const goBack = () => nav(-1);
  return(
  <div className="product">
    <div className="product-container">
      <header className="product-header">
        <button className='product-btn' onClick={goBack}>     
          <img className="img256" src="../../images/Group64.svg" alt="" />
        </button>
        <Order />  
      </header>
      <div className="wrapper1">
        <DishCard
          id={openProductPage.id}
          url={openProductPage.url}
          title={openProductPage.title}
          description={openProductPage.description}
          price={openProductPage.price}
          weight={openProductPage.weight}
        />
      </div>
    </div>
  </div>
  );
}

export default Dish;