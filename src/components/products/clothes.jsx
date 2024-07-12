/* eslint-disable react/no-unescaped-entities */
import { WishlistContext } from '../wishlist/wishlistContext';
import './products.css';
import React from 'react';
import { products } from '../../data/data'
export default function Clothes() {
  const { addToWishlist } =React.useContext(WishlistContext);
  return (
    <div className='clothes'>
      <div className="up">
        <h2>men's and women's clothing</h2>
        <p><span>new</span> recommended</p>
      </div>
      <div className="down">
      <div className="categorie">
                {products.map((cate)=>(
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
      </div>
    </div>
  )
}
