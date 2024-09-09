import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext)
  return (
    <div className='productdisplay'>
        <div className='productdisplay-left'>
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
        </div>
        <div className='productdisplay-img'>
            <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
    </div>
    <div className='productdisplay-right'>
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(458)</p>
        </div>
        <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">${product.old_price}</div>
            <div className="productdisplay-right-price-new">${product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
        The Men's Green Solid Zippered Full-Zip Slim Fit Bomber Jacket is a stylish and versatile outerwear piece designed for a modern, sleek look. Made from durable fabric, this bomber jacket features a full-length zip closure, providing easy wear and added warmth. Its slim fit silhouette enhances the body’s shape, offering a tailored appearance. The jacket’s minimalistic design in a bold green color makes it a standout piece, perfect for casual outings or layering over a smart-casual outfit. Ribbed cuffs and hem ensure a snug fit, while the zipper detail adds a contemporary touch.
        </div>
        <div className="productdisplay-rigt-size">
            <h1>Select Size</h1>
            <div className="productdisplay-right-sizes">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
        </div>
        <button onClick={()=>addToCart(product.id)}>ADD TO CART</button>
    <p className="productdisplay-right-category"><span>Category :</span>Women, T-Shirt, Crop Top</p>
    <p className="productdisplay-right-category"><span>Tags :</span>Modern, Latest</p>
    </div>
    </div>
  )
}

export default ProductDisplay