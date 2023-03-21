import '../components/elements/products/Products.css';
import Card from '../components/elements/cards/card';
import { products } from '../menuList';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid'
import Order from '../components/block/Order';

function Products() {
  
  return (
    <main className="main">
      <div className="container">
        <header className="header">
          <h1>НАША ПРОДУКЦИЯ</h1>
          <div className='Order'><Order /></div>   
        </header>
        <Link to="/Dish" style={{ textDecoration: 'none', color: `#FFFFFF`, fontFamily: 'Montserrat' }}>
        <div className="menu">
          {products.map(product => {
            const { url, title, description, price, weight } = product
            return (
              <Card 
                id={uuidv4()}
                url={url}
                title={title}
                description={description}
                price={price}
                weight={weight}
              />
            )
          })}
        </div>
        </Link>
      </div>
    </main>
  );
}

export default Products;