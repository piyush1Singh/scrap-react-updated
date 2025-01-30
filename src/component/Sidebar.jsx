import React, { useEffect, useState } from "react";
import Stickybar from "./Stickybar";
import Logo from "../assets/images/DP-Retail.png";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineUser,
} from "react-icons/ai";
import { NavDropdown } from "react-bootstrap";
import { useCategory } from "../CategoryContext";
import CartSidebar from "./CartSidebar";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";

const Sidebar = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  // State variable to control the visibility of the cart

  const [cart, setCart] = useState([]);
  // State variable to store the cart data

  const fetchData = async () => {
    // Async function to fetch cart data
    setShowCart(true);
    // Set `showCart` state to true to display the cart

    try {
      const requestOptions = {
        method: "POST",
        credentials: "include",
      };
      const response = await fetch(
        "http://localhost/Scrap-react/Admin-panel/Api-Calls/Cart/fetchallCart.php",
        requestOptions
      );
      const responseData = await response.json();
      // Parse the response data as JSON

      const newArray = responseData.map((value) => ({
        id: value.id,
        quantity: value.quantity,
      }));
      // Map the response data to a new array, extracting the `id` and `quantity` properties

      setCart(newArray);
      // Set the `cart` state to the new array containing the cart data
      console.log(cart, "setcart");
      // Output the `cart` state to the console
    } catch (error) {
      console.error(error);
      // Log any errors that occur during the fetch operation
    }
  };

  const [show, setShow] = useState(false);
  // State variable to control the visibility of the Bootstrap modal

  const handleClose = () => setShow(false);
  // Function to close the modal

  const handleShow = () => setShow(true);
  // Function to show the modal

  const loginModal = () => {
    handleShow();
    // Call the `handleShow` function to show the login modal
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // State variable to control the visibility of the login dropdown

  const logout = () => {
    localStorage.removeItem("login");
    console.log("removed");
    return;
  };
  // Function to handle the logout action by removing the "login" item from the localStorage

  const { category } = useCategory();
  // Retrieve the `category` variable from the `useCategory` hook

  return (
    <div>
      <Stickybar />
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div>
            <Link to="/" className="navbar-brand">
              <img src={Logo} />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link">Product</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Benifit</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Contact</a>
              </li>
            </ul>
          </div>
          <div className="icon">
            <ul className="d-flex list-style-none">
              {!localStorage.getItem("login") === true ? (
                <li className="icon-button" title="Login">
                  <a onClick={() => loginModal()}>
                    <AiOutlineUser />
                  </a>
                </li>
              ) : (
                <NavDropdown
                  className="nav-link"
                  title="Home"
                  id="basic-nav-dropdown"
                  show={isDropdownOpen}
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <NavDropdown.Item>
                    <svg className="icon icon-user-light mr-2"></svg>
                    Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={logout}>
                    <i className="fa fa-sign-out mr-2"></i> Logout
                  </NavDropdown.Item>
                </NavDropdown>
              )}

              <li className="icon-button" title="Wishlist">
                <a>
                  <AiOutlineHeart />
                </a>
              </li>
              <li
                className="icon-button"
                title="Cart"
                onClick={() => fetchData()}
              >
                <AiOutlineShoppingCart />
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="topbar d-none d-xl-block border-top">
        <div className="container text-center">
          <ul className="list-inline align-items-center mb-0">
            {category?.map((value, key) => (
              <li className="list-inline-item mr-5" key={key}>
                <a href={"/categories/" + value[0]} className="nav-link">
                  {value[1]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <CartSidebar cart={cart} showCart={showCart} setShowCart={setShowCart} />
      <LoginModal
        handleClose={handleClose}
        handleShow={handleShow}
        show={show}
      />
      <div>{children}</div>
    </div>
  );
};

export default Sidebar;
