

import React from 'react';
import { CategoriesWomen } from "../../data/data";
import './home.css';
import { WishlistContext } from '../wishlist/wishlistContext';

export default function CategoWomen() {
    const { addToWishlist } = React.useContext(WishlistContext);

    return (
        <section className="categories">
            <div className="title">
                <h1>Categories For Women</h1>
            </div>
            <div className="categorie">
                {CategoriesWomen.map((cate) => (
                    <div className="cate" key={cate.id}>
                        <span className="icon-heart" onClick={() => addToWishlist({
                            id: cate.id,
                            img: cate.imgSource,
                            title: cate.title,
                            brand: cate.brand,
                            price: cate.price
                        })}/>
                        <img src={cate.imgSource} alt={cate.title} />
                        <div className="infor">
                            <span>
                                <h4>{cate.title}</h4>
                                <span>{cate.brand}</span>
                            </span>
                            <p>${cate.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

