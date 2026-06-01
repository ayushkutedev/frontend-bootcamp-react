import { useState } from "react";
import ProductCard from "./components/ProductCard";
import "./App.css";

function App() {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 99,
      image: "https://picsum.photos/id/1/300/200",
      description: "High-quality wireless headphones",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 199,
      image: "https://picsum.photos/id/2/300/200",
      description: "Feature-rich smart watch",
    },
    {
      id: 3,
      name: "Laptop Stand",
      price: 49,
      image: "https://picsum.photos/id/3/300/200",
      description: "Ergonomic laptop stand",
    },
  ];

  return (
    <div className="app">
      <header className="header">
        <h1>Product Catalog</h1>
      </header>

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
}

export default App;