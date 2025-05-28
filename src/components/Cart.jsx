import React, { useState } from "react";

export default function Cart({ items }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="cart">
      <div className={`cart-btn ${open ? 'active' : ''}`} onClick={() => setOpen(!open)}>
        <svg className="cart-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
        <span className="cart-count">{items.length}</span>
      </div>
      {open && (
        <div className="cart-popup">
          <div className="cart-header">
            <span className="cart-title">Корзина</span>
            <span className="cart-items-count">{items.length} товаров</span>
          </div>
          <ul className="cart-items">
            {items.length === 0 ? (
              <li className="cart-empty">Корзина пуста</li>
            ) : (
              items.map(title => (
                <li key={title} className="cart-item">
                  <span className="cart-item-title">{title}</span>
                </li>
              ))
            )}
          </ul>
        </div>
      )}
    </div>
  );
}