import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import Logo from "../../assets/logo.png";
import { useSelector, useDispatch } from "react-redux";
import { PopularData, TopSalesData } from "../../data"; // Importing PopularData and TopSalesData
import { cartActions } from "../../store/cartSlice";

import FilteredProductCard from "../FilteredProductCard"; // Importing the FilteredProductCard component

const Navbar = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [fixedNav, setFixedNav] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false); 
  const [searchQuery, setSearchQuery] = useState(""); 
  const [filteredItems, setFilteredItems] = useState([]); 
  const [iconColor, setIconColor] = useState("white"); 
  const [logoutColor, setLogoutColor] = useState("white"); 

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 50) {
        setFixedNav(true);
        setIconColor("black");
        setLogoutColor("black");
      } else {
        setFixedNav(false);
        setIconColor("white");
        setLogoutColor("white");
      }
    });
  }, []);

  // Function to toggle search bar visibility
  const toggleSearchBar = () => {
    setShowSearchBar((prevShowSearchBar) => !prevShowSearchBar);
    setSearchQuery(""); // Clear search query when toggling search bar
  };

  // Function to handle search query change
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Filter items based on the search query from both PopularData and TopSalesData
    const filteredPopular = PopularData.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    const filteredTopSales = TopSalesData.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    const filtered = [...filteredPopular, ...filteredTopSales]; // Combine results
    setFilteredItems(filtered);
  };

  // Function to clear search query and close search bar
  const clearSearch = () => {
    setShowSearchBar(false);
    setSearchQuery("");
    setFilteredItems([]); // Clear filtered items
  };

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className={fixedNav ? "navbar fixed-nav py-3" : "navbar py-3"}>
      <div className="container">
        <div className="d-flex w-100 justify-content-between align-items-center">
          <div className="logo">
            <img src={Logo} className="img-fluid" alt="logo" />
          </div>
          <div className="nav-icons">
            <ul className="d-flex align-items-center gap-3">
              <li>
                {/* Conditionally render search bar */}
                {showSearchBar ? (
                  <div className="search-bar mr-3">
                    {/* Your search bar JSX */}
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={handleSearchChange}
                      className="border rounded-lg border-black px-4 py-2 focus:outline-none bg-gray-100 placeholder-black"
                    />
                    {/* Additional search bar components */}
                    <button onClick={clearSearch}>
                    <FontAwesomeIcon icon={faTimes} size="lg" />
                    </button>
                  </div>
                ) : (
                  <button onClick={toggleSearchBar}>
                      <i className="fa-solid fa-magnifying-glass" style={{ color: iconColor }}></i>
                  </button>
                )}
              </li>
            
             
              <li>
                <button
                  onClick={() => dispatch(cartActions.showCart())}
                  className="cart-icon position-relative"
                >
                  <i className="fa-solid fa-cart-shopping" style={{ color: iconColor }}></i>{" "}
                  <span className="cart-num fw-bold d-flex justify-content-center align-items-center position-absolute rounded-circle">
                    {cartItems.length}
                  </span>
                </button>
              </li>
              <li>
              
              <button onClick={handleLogout} style={{ color: logoutColor }}> Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Render filtered items */}
      {showSearchBar && (
  <div className="container mt-4"> 
    <div className="row">
      {filteredItems.map((item) => (
        <FilteredProductCard key={item.id} filteredItem={item} />
      ))}
    </div>
  </div>
)}

    </div>
  );
};

export default Navbar;
