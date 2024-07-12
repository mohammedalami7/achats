



import  { useState, useContext } from 'react';
import './wishlist.css';
import { WishlistContext } from './wishlistContext';

export default function Wishlist() {
    const { wishlist, removeCart } = useContext(WishlistContext);

    const [counters, setCounters] = useState(wishlist.map(() => 1));

    const Plus = (index) => {
        setCounters((prevCounters) => {
            const newCounters = [...prevCounters];
            if (newCounters[index] >= 0 && newCounters[index] < 20) {
                newCounters[index] += 1;
            }
            return newCounters;
        });
    };

    const Minus = (index) => {
        setCounters((prevCounters) => {
            const newCounters = [...prevCounters];
            if (newCounters[index] > 1) {
                newCounters[index] -= 1;
            }
            return newCounters;
        });
    };

    const totalPrice = wishlist.reduce((total, item, index) => total + item.price * counters[index], 0);

    return (
        <div className="wishlist">
            {wishlist.length > 0 ? (
                wishlist.map((product, index) => (
                    <div key={index} className="wishlist-item">
                        <div className="shopping">
                            <img src={product.img} alt={product.title} />
                            <div className="detail">
                                <h4>{product.title}</h4>
                                <span>{product.brand}</span>
                                <p>${product.price}</p>
                            </div>
                            <div className="quantity">
                                <h4>Quantity</h4>
                                <div>
                                    <span onClick={() => Plus(index)}>+</span>
                                    <span>{counters[index]}</span>
                                    <span onClick={() => Minus(index)}>-</span>
                                </div>
                            </div>
                        </div>
                        <span className="remove" onClick={() => removeCart(index)}>Remove</span>
                    </div>
                ))
            ) : (
                <p>No items in wishlist</p>
            )}
            <div className="checkout">
                <h2>Grand Total <span>${totalPrice}</span></h2>
                <button type="submit">Proceed To Checkout</button>
            </div>
        </div>
    );
}
