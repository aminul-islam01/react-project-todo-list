import { FaShoppingCart } from 'react-icons/fa';
import './SingleProduct.css'

const SingleProduct = ({product, handleAddToCard}) => {
    const {img, name, price, seller, ratings} = product;
    
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-details'>
                <h3>{name}</h3>
                <p>Price: ${price}</p>
                <div className='rating'>
                    <small>Manufacturer : {seller}</small><br />
                    <small>Rating : {ratings} star</small>
                </div>
            </div>
            <button onClick={() => handleAddToCard(product)} className='add-btn'>
                Add to Card 
                <FaShoppingCart></FaShoppingCart>
                </button>
        </div>
    );
};

export default SingleProduct;