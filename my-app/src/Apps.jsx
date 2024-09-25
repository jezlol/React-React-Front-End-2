import React, { useState } from 'react';
import FilterableProductTable from './FilterableProductTable'; // Keep your product table import
import BooksApp from './books/BooksApp'; // Import the new BooksApp

const PRODUCTS = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

function App() {
  const [showBooks, setShowBooks] = useState(false);

  return (
    <div>
      <h1>{showBooks ? "Book Management" : "Product Search"}</h1>
      <button onClick={() => setShowBooks(!showBooks)}>
        {showBooks ? "Go to Products" : "Go to Books"}
      </button>
      {showBooks ? <BooksApp /> : <FilterableProductTable products={PRODUCTS} />}
    </div>
  );
}

export default App;
