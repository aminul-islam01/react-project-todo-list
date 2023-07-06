import './ReviewItems.css'
import { FaTrashAlt } from "react-icons/fa";


const ReviewItems = ({ product, handleRemoveCart }) => {
    const { img, name, price, quantity, _id } = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-content'>
                <h4>{name}</h4>
                <p>Price: <span>${price}</span></p>
                <p>Quantity: <span>{quantity}</span></p>
            </div>
            <button onClick={() => handleRemoveCart(_id)}>
                <FaTrashAlt></FaTrashAlt>
            </button>
        </div>
    );
};

export default ReviewItems;