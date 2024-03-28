import React, { useState } from "react";
import { PopularData, TopSalesData } from "./data"; // Importing product data

const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  // Function to handle search query change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Function to filter products based on search query for PopularData
  const filterPopularProducts = () => {
    return PopularData.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  // Function to filter products based on search query for TopSalesData
  const filterTopSalesProducts = () => {
    return TopSalesData.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  return (
    <div>
      {/* Search input field */}
      <input
        type="text"
        placeholder="Search product..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      {/* Render filtered popular products */}
      <div>
        {searchQuery && (
          <div>
            <h2>Popular Products:</h2>
            {filterPopularProducts().map((product) => (
              <div key={product.id}>
                <p>{product.title}</p>
                {/* Render other product details as needed */}
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Render filtered top sales products */}
      <div>
        {searchQuery && (
          <div>
            <h2>Top Sales Products:</h2>
            {filterTopSalesProducts().map((product) => (
              <div key={product.id}>
                <p>{product.title}</p>
                {/* Render other product details as needed */}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchComponent;
