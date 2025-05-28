import React from "react";
import ProductItem from "./ProductItem";
export default function ProductList({products, onAddToCart}){
    return(
        <div className="product-list">
            {products.map(product => (
                <ProductItem product={product} key={product.id} onAddToCart={onAddToCart}/>
            ))}
        </div>
    )
}