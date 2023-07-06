import { useEffect, useState } from "react";
import './Products.css'
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../../utilities/fakedb';
import SingleProduct from "../../SingleProduct/SingleProduct";
import Cart from "../../Cart/Cart";
import { FaArrowRight } from 'react-icons/fa';
import { Link } from "react-router-dom";


const Products = () => {
    const [products, setProducts] = useState([]);
    const [cardProducts, setCardProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        const storedCart = getShoppingCart();
        const ids = Object.keys(storedCart);

        fetch('http://localhost:5000/productsByIds', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(ids)
        })
        .then(res => res.json())
        .then(data => setCardProducts(data))

        const saveCart = [];
        //step:1 get id from localStorage
        for (const id in storedCart) {
            // step:2 get products array using this id 
            const addedProduct = cardProducts.find(product => product.id === id);
            if (addedProduct) {
                //  step:3 get product quantity from localStorage
                const quantity = storedCart[id];

                // step:4 added product quantity to addedProduct object 
                addedProduct.quantity = quantity;

                // step:5 addedProduct object push to saveCart array 
                saveCart.push(addedProduct);
            }
            // console.log(addedProduct)
        }
        // step:6 saveCart array set to setCart-state 
        setCart(saveCart);
    }, [products, cardProducts])

    const handleAddToCard = (product) => {
        // const newCart = [...cart, product];
        let newCart = [];
        const exists = cart.find(pd => pd.id === product.id);
        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product]
        } else {
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, exists];
        }
        // console.log(cart);
        setCart(newCart);
        addToDb(product.id);
    }

    const handleClearCart = () => {
        setCart("");
        deleteShoppingCart();
    }

    return (
        <>
            <div className='shop-container'>
                <div className='product-container'>
                    {products.map(product => <SingleProduct
                        product={product}
                        key={product.id}
                        handleAddToCard={handleAddToCard}>
                    </SingleProduct>)}
                </div>
                <div className='card-container'>
                    <Cart
                        cart={cart}
                        handleClearCart={handleClearCart}>
                        <Link to="/orders" className='link'>
                            <button className='btn-common'>Review Order
                                <FaArrowRight></FaArrowRight>
                            </button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </>
    );
};

export default Products;