import React from "react";

export default function Preloader() {
  return (
    <div className="preloader">
      <div className="preloader-spinner">
        <div className="preloader-circle"></div>
        <div className="preloader-circle"></div>
        <div className="preloader-circle"></div>
      </div>
      <p className="preloader-text">Загрузка товаров...</p>
    </div>
  );
}