import React from "react";
export default function ProductItem({product, onAddToCart}){
    return (
     <div className="product-item" onClick={() => onAddToCart(product)}>
        <img src={product.thumbnail} alt={product.title} />
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <b>{product.price} $</b>
     </div>
    );
}