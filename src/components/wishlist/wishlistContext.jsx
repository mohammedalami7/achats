import { createContext, useState, useEffect } from 'react';
export const WishlistContext = createContext();

// eslint-disable-next-line react/prop-types
export const WishlistProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState(() => {
        // Load wishlist from localStorage
        const savedWishlist = localStorage.getItem('cartShopping');
        return savedWishlist ? JSON.parse(savedWishlist) : [];
    });

    useEffect(() => {
        // Save wishlist to localStorage whenever it changes
        localStorage.setItem('cartShopping', JSON.stringify(wishlist));
    }, [wishlist]);

    const addToWishlist = (product) => {
        setWishlist((prevWishlist) => {
            if (!prevWishlist.some(item => item.id === product.id)) {
                return [...prevWishlist, product];
            }
            return prevWishlist;
        });
    };

    const removeCart = (productIndex) => {
        setWishlist((prevWishlist) => prevWishlist.filter((_, index) => index !== productIndex));
    };

    return (
        <WishlistContext.Provider value={{ wishlist, addToWishlist, removeCart }}>
            {children}
        </WishlistContext.Provider>
    );
};
