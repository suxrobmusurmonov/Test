import React, { useEffect, useRef, useState } from "react";
import Preloader from "./components/Preloader";
import Cart from "./components/Cart";
import ProductList from "./components/ProductList";
import SearchBar from "./components/SearchBar";
export default function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([])
  const [modal, setModal] = useState({ open: false, product: null })
  const inputRef = useRef(null)

  useEffect(() => {
    setTimeout(() => {
      fetch("https://dummyjson.com/products").then(res => res.json())
      .then(data => {
        setProducts(data.products);
        setLoading(false);
      });
    }, 1000);
  }, [])

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  const handleAddToCart = (product) => {
    setModal({ open: true, product });
  };

  const handleConfirmAdd = () => {
    setCart(prev =>
      prev.includes(modal.product.title) ? prev : [...prev, modal.product.title]
    );
    setModal({ open: false, product: null });
  };

  const handleCancelAdd = () => {
    setModal({ open: false, product: null });
  };

  const filtered = products.filter(p => p.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <Cart items={cart} />
      <SearchBar value={search} onChange={setSearch} inputRef={inputRef}/>
      {loading ? (
        <Preloader />
      ) : (
        <div className="container">
          <ProductList products={filtered} onAddToCart={handleAddToCart} />
        </div>
      )}
      {modal.open && (
        <div className="modal-bg">
          <div className="modal">
            <div className="modal-title">Добавить в корзину?</div>
            <div className="modal-btns">
              <button className="modal-btn yes" onClick={handleConfirmAdd}>Да</button>
              <button className="modal-btn no" onClick={handleCancelAdd}>Нет</button>
            </div>
          </div>
        </div>

      )}
    </div>
  )
};
