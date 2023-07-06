import { FaTrashAlt } from 'react-icons/fa';
import './Cart.css'

const Cart = ({cart, handleClearCart, children}) => {
    let totalPrice = 0;
    let totalShipping = 0;
    let totalItem = 0;
    for(const product of cart) {
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        totalItem = totalItem + product.quantity;
    }
    const tax = totalPrice * 0.7;
    const grandTotal = totalPrice + totalShipping + tax;
    return (
        <div className='cart'>
            <h5>Order Summary</h5>
            <p>Selected Item: {totalItem}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping Charge: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
            <button className='btn-clear' onClick={handleClearCart}>Clear Cart
            <FaTrashAlt></FaTrashAlt>
            </button>
            {children}
        </div>
    );
};

export default Cart;