import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState(localStorage.getItem("login"));

  const [user_id, setUser_id] = useState(localStorage.getItem("user_id"));

  const fetchUserDetails = async () => {
    // Send a POST request to the specified URL and pass the `user_id` as the request body
    let url = await fetch(
      "http://localhost/Scrap-react/Admin-panel/Api-Calls/Checkout/fetchUserDetails.php",
      {
        method: "POST",
        body: JSON.stringify({
          user_id: user_id,
        }),
      }
    );

    // Extract the JSON data from the response
    let data = await url.json();

    // Log the `data` and the string "user_id" to the console
    console.log(data, "user_id");
  };

  useEffect(() => {
    // Call the `fetchUserDetails` function
    fetchUserDetails();
    // Call the `fetchData` function
    fetchData();
    // Check if `login` is not equal to the string "true"
    if (login !== "true") {
      // Navigate to the "/" route (presumably using a routing library)
      navigate("/");
    }
  }, [login]);

  const [cart, setCart] = useState([]);

  const fetchData = async () => {
    try {
      // Set the request options with the desired method and include credentials
      const requestOptions = {
        method: "POST",
        credentials: "include",
      };

      // Send a fetch request to the specified URL with the defined request options
      const response = await fetch(
        "http://localhost/Scrap-react/Admin-panel/Api-Calls/Cart/fetchallCart.php",
        requestOptions
      );

      // Extract the JSON data from the response
      const responseData = await response.json();

      // Map over the response data and create a new array with selected properties
      const newArray = responseData.map((value) => ({
        id: value.id,
        quantity: value.quantity,
      }));

      // Update the `cart` state with the newly created array
      setCart(newArray);

      // Log the `cart` state to the console for debugging purposes
      console.log(cart, "setcart");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Sidebar>
      <section className="pb-lg-13 pb-11" data-animated-id="2">
        <div className="container">
          <h2 className="text-center my-9">Check Out</h2>
          <form>
            <div className="row">
              <div className="col-lg-4 pb-lg-0 pb-11 order-lg-last">
                <div className="card border-0">
                  <div className="card-header px-0 mx-6 bg-transparent py-5">
                    <h4 className="fs-24 mb-5">Order Summary</h4>
                    {cart?.map(() => (
                      <div className="media w-100 mb-4">
                        <div className="w-60px mr-3">
                          <img
                            src="images/product-07.jpg"
                            alt="Natural Coconut Cleansing Oil"
                          />
                        </div>
                        <div className="media-body d-flex">
                          <div className="cart-price pr-6">
                            <a className="text-secondary pr-6">
                              Natural Coconut Cleansing Oil
                              <span className="text-body">x1</span>
                            </a>
                            <p className="fs-14 text-secondary mb-0 mt-1">
                              Size:<span className="text-body"> Fullsize</span>
                            </p>
                          </div>
                          <div className="ml-auto">
                            <p className="fs-14 text-secondary mb-0 font-weight-bold">
                              $29.00
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="card-body px-6 pt-5">
                    <div className="d-flex align-items-center mb-2">
                      <span>Subtotal:</span>
                      <span className="d-block ml-auto text-secondary font-weight-bold">
                        $99.00
                      </span>
                    </div>
                    <div className="d-flex align-items-center">
                      <span>Shipping:</span>
                      <span className="d-block ml-auto text-secondary font-weight-bold">
                        $0
                      </span>
                    </div>
                  </div>
                  <div className="card-footer bg-transparent px-0 pb-1 mx-6">
                    <div className="d-flex align-items-center font-weight-bold mb-3">
                      <span className="text-secondary">Total pricre:</span>
                      <span className="d-block ml-auto text-secondary fs-24 font-weight-bold">
                        $99.00
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 pr-xl-15 order-lg-first form-control-01">
                <p className="mb-2">
                  Returning customer?
                  <a data-toggle="modal" data-target="#sign-in">
                    Click here to login
                  </a>
                </p>
                <p>
                  Have a coupon?
                  <a
                    data-toggle="collapse"
                    href="#collapsecoupon"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapsecoupon"
                  >
                    Click here to enter your code
                  </a>
                </p>
                <div
                  className="card collapse mw-460 border-0"
                  id="collapsecoupon"
                >
                  <div className="card-body pt-6 px-5 pb-7 my-6 border">
                    <p className="card-text text-secondary mb-5">
                      If you have a coupon code, please apply it below.
                    </p>
                    <div className="input-group">
                      <input
                        type="email"
                        name="coupon_code"
                        className="form-control border-0"
                        placeholder="Your Email*"
                      />
                      <div className="input-group-append">
                        <button
                          className="btn btn-secondary px-3 border-0"
                          type="submit"
                          name="apply_coupon"
                          value="Apply coupon"
                        >
                          Apply Coupon
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <h4 className="fs-24 pt-1 mb-4">Shipping Infomation</h4>
                <div className="mb-3">
                  <label className="mb-2 fs-13 letter-spacing-01 font-weight-600 text-uppercase">
                    name
                  </label>
                  <div className="row">
                    <div className="col-md-6 mb-md-0 mb-4">
                      <input
                        type="text"
                        className="form-control border-0"
                        id="first-name"
                        name="firstname"
                        placeholder="First Name"
                        required=""
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control border-0"
                        id="last-name"
                        name="lasttname"
                        placeholder="Last Name"
                        required=""
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="row">
                    <div className="col-md-12 mb-md-0 mb-4">
                      <label
                        htmlFor="street-address"
                        className="mb-2 fs-13 letter-spacing-01 font-weight-600 text-uppercase"
                      >
                        Street Address
                      </label>
                      <input
                        type="text"
                        className="form-control border-0"
                        id="street-address"
                        name="streetaddress"
                        required=""
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="row">
                    <div className="col-md-4 mb-md-0 mb-4">
                      <label
                        htmlFor="city"
                        className="mb-2 fs-13 letter-spacing-01 font-weight-600 text-uppercase"
                      >
                        City
                      </label>
                      <input
                        type="text"
                        className="form-control border-0"
                        id="city"
                        name="city"
                        required=""
                      />
                    </div>
                    <div className="col-md-4 mb-md-0 mb-4">
                      <label
                        htmlFor="state"
                        className="mb-2 fs-13 letter-spacing-01 font-weight-600 text-uppercase"
                      >
                        State
                      </label>
                      <input
                        type="text"
                        className="form-control border-0"
                        id="state"
                        name="state"
                        required=""
                      />
                    </div>
                    <div className="col-md-4">
                      <label
                        htmlFor="zip"
                        className="mb-2 fs-13 letter-spacing-01 font-weight-600 text-uppercase"
                      >
                        zip code
                      </label>
                      <input
                        type="text"
                        className="form-control border-0"
                        id="zip"
                        name="zip"
                        required=""
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label className="mb-2 fs-13 letter-spacing-01 font-weight-600 text-uppercase">
                    Country
                  </label>
                  <div className="dropdown show lh-1 rounded mb-4">
                    <a
                      className="dropdown-toggle custom-dropdown-toggle text-decoration-none text-secondary p-3 position-relative d-block"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Viet Nam
                    </a>
                    <div
                      className="dropdown-menu custom-dropdown-item"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a className="dropdown-item">Andorra</a>
                      <a className="dropdown-item">San Marino</a>
                      <a className="dropdown-item">Tunisia</a>
                      <a className="dropdown-item">Micronesia</a>
                      <a className="dropdown-item">Solomon Islands</a>
                      <a className="dropdown-item">Macedonia</a>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label className="mb-2 fs-13 letter-spacing-01 font-weight-600 text-uppercase">
                    info
                  </label>
                  <div className="row">
                    <div className="col-md-6 mb-md-0 mb-4">
                      <input
                        type="email"
                        className="form-control border-0"
                        id="email"
                        name="email"
                        placeholder="Email"
                        required=""
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="number"
                        className="form-control border-0"
                        id="phone"
                        name="phone"
                        placeholder="Phone number"
                        required=""
                      />
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-secondary bg-hover-primary border-hover-primary px-7 mt-6"
                >
                  Checkout
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </Sidebar>
  );
};

export default Checkout;
