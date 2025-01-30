import React, { useState, useEffect, useContext } from "react";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import "../assets/App.css";
import "../index.css";
import { useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { CartContext } from "../CartContext";

const ProductDescription = () => {
  const params = useParams(); // Retrieve the URL parameters using the `useParams` hook from React Router
  const [productDesc, setProductDesc] = useState(); // Declare a state variable `productDesc` and its setter function `setProductDesc`

  const fetchProduct = async () => {
    // Asynchronous function to fetch product data based on the `params.id` value
    let url = await fetch(
      // Send a fetch request to the specified URL
      "http://localhost/Scrap-react/Admin-panel/Api-Calls/Product/fetchproductbyid.php",
      {
        method: "POST",
        body: JSON.stringify({
          id: params.id, // Pass the `params.id` value as the `id` property in the request body
        }),
      }
    );
    let data = await url.json(); // Extract the JSON data from the response
    setProductDesc(data); // Update the `productDesc` state with the retrieved data
  };

  useEffect(() => {
    // Use the `useEffect` hook to fetch product data when the component mounts
    fetchProduct();
  }, []);

  const { quantity, saveToCart, setQuantity } = useContext(CartContext); // Access values from the `CartContext` using the `useContext` hook

  const handleAddToCart = (e) => {
    // Event handler function for adding the product to the cart
    e.preventDefault();
    saveToCart(e, productDesc); // Call the `saveToCart` function from the `CartContext` and pass the event and `productDesc` data
  };

  const ratings = (totalStar) => {
    // Function to render a star rating based on the `totalStar` parameter

    if (totalStar == 1) {
      // If `totalStar` is 1, render a single filled star
      return (
        <>
          <li className="list-inline-item fs-12 text-primary mr-0">
            <AiFillStar />
          </li>
          <span className="card-text fs-14 font-weight-400 pl-2 mt-0 lh-1">
            Reviews
          </span>
        </>
      );
    } else if (totalStar == 2) {
      // If `totalStar` is 2, render two filled stars
      return (
        <>
          <li className="list-inline-item fs-12 text-primary mr-0">
            <AiFillStar />
            <span>Reviews</span>
          </li>
          <li className="list-inline-item fs-12 text-primary mr-0">
            <AiFillStar />
          </li>
          <span className="card-text fs-14 font-weight-400 pl-2 mt-0 lh-1">
            Reviews
          </span>
        </>
      );
    } else if (totalStar == 3) {
      // If `totalStar` is 3, render three filled stars
      return (
        <>
          <li className="list-inline-item fs-12 text-primary mr-0">
            <AiFillStar />
          </li>
          <li className="list-inline-item fs-12 text-primary mr-0">
            <AiFillStar />
          </li>
          <li className="list-inline-item fs-12 text-primary mr-0">
            <AiFillStar />
          </li>
          <span className="card-text fs-14 font-weight-400 pl-2 mt-0 lh-1">
            Reviews
          </span>
        </>
      );
    }
    else if (totalStar == 4) {
      // If `totalStar` is 4, render three filled stars
      return (
        <>
          <li className="list-inline-item fs-12 text-primary mr-0">
            <AiFillStar />
          </li>
          <li className="list-inline-item fs-12 text-primary mr-0">
            <AiFillStar />
          </li>
          <li className="list-inline-item fs-12 text-primary mr-0">
            <AiFillStar />
          </li>
          <li className="list-inline-item fs-12 text-primary mr-0">
            <AiFillStar />
          </li>
          <span className="card-text fs-14 font-weight-400 pl-2 mt-0 lh-1">
            Reviews
          </span>
        </>
      );
    }
    else if (totalStar == 5) {
      // If `totalStar` is 5, render three filled stars
      return (
        <>
          <li className="list-inline-item fs-12 text-primary mr-0">
            <AiFillStar />
          </li>
          <li className="list-inline-item fs-12 text-primary mr-0">
            <AiFillStar />
          </li>
          <li className="list-inline-item fs-12 text-primary mr-0">
            <AiFillStar />
          </li>
          <li className="list-inline-item fs-12 text-primary mr-0">
            <AiFillStar />
          </li>
          <li className="list-inline-item fs-12 text-primary mr-0">
            <AiFillStar />
          </li>
          <span className="card-text fs-14 font-weight-400 pl-2 mt-0 lh-1">
            Reviews
          </span>
        </>
      );
    }
    
    // ... (similar conditional blocks for 4 and 5 stars omitted for brevity) ...
    else {
      // If `totalStar` is not 1, 2, 3, 4, or 5, render a message indicating no reviews found
      return (
        <div className="d-flex">
          <li>
            <AiOutlineStar />
          </li>
          <li>
            <AiOutlineStar />
          </li>
          <li>
            <AiOutlineStar />
          </li>
          <li>
            <AiOutlineStar />
          </li>
          <li>
            <AiOutlineStar />
          </li>
          <span className="card-text fs-14 font-weight-600 cl-red mt-1 pl-1 lh-1">
            No Reviews Found
          </span>
        </div>
      );
    }
  };

  return (
    <Sidebar>
      {productDesc != undefined ? (
        <section
          className="pt-11 pb-11 pb-lg-15 product-details-layout-5"
          data-animated-id="2"
        >
          <div className="container container-xl">
            <div className="row">
              <div
                className="col-md-6 mb-8 mb-md-0 primary-gallery summary-sticky pr-xl-9"
                id="summary-sticky"
              >
                <div className="primary-summary-inner">
                  <div className="galleries-product galleries-product-01 position-relative d-flex ">
                    <div
                      className="slick-slider slider-for mx-0 pl-xl-5 slick-initialized slick-vertical"
                      data-slick-options='{"slidesToShow": 1,"vertical":true, "autoplay":false,"dots":false,"arrows":false,"asNavFor": ".slider-nav","responsive":[{"breakpoint": 1200,"settings": {"vertical": false}}]}'
                    >
                      <div className="slick-list draggable">
                        <div className="slick-track">
                          <div
                            className="box px-0 slick-slide"
                            data-slick-index="3"
                            aria-hidden="true"
                            tabIndex="-1"
                          >
                            <div className="card p-0 rounded-0 border-0">
                              <a
                                className="card-img"
                                data-gtf-mfp="true"
                                data-gallery-id="02"
                                tabIndex="-1"
                              >
                                <img src={productDesc[0][3]} />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <p className="d-flex align-items-center mb-3">
                  <span className="text-line-through">
                    {(
                      parseInt((productDesc[0][4] / 100) * 10) +
                      parseInt(productDesc[0][4])
                    ).toLocaleString("en-IN", {
                      style: "currency",
                      currency: "INR",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })}
                  </span>
                  <span className="fs-18 text-secondary font-weight-bold ml-3">
                    {parseInt(productDesc[0][4]).toLocaleString("en-IN", {
                      style: "currency",
                      currency: "INR",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })}
                  </span>
                  <span className="badge badge-primary fs-16 ml-4 font-weight-600 px-3">
                    10%
                  </span>
                </p>
                <h2 className="fs-24 mb-2">{productDesc[0][1]}</h2>
                <div className="d-flex align-items-center flex-wrap mb-3 lh-12">
                  <ul className="list-inline d-flex mb-0 rating-result">
                    {ratings(productDesc[0][5])}
                  </ul>
                 
                </div>
                <p className="mb-5">{productDesc[0][2]}</p>

                <form>
                  <div className="form-group shop-swatch mb-5 d-flex align-items-center">
                    <span className="font-weight-600 text-secondary mr-4">
                      Size:
                    </span>
                    <ul className="list-inline d-flex justify-content-start mb-0">
                      <li className="list-inline-item mr-2 selected font-weight-600">
                        <a
                          className="fs-14 p-2 lh-13 d-block swatches-item rounded text-decoration-none border"
                          data-var="full size"
                        >
                          Full size
                        </a>
                      </li>
                      <li className="list-inline-item font-weight-600">
                        <a
                          className="fs-14 p-2 lh-13 d-block swatches-item rounded text-decoration-none border"
                          data-var="mini size"
                        >
                          Mini size
                        </a>
                      </li>
                    </ul>
                    <div className="dropdown bootstrap-select form-select swatches-select d-none">
                      <select
                        name="swatches"
                        className="form-select swatches-select d-none"
                        aria-label="Default select example"
                      >
                        <option selected="" value="full size">
                          Full size
                        </option>
                        <option value="mini size">Mini size</option>
                      </select>
                      <button
                        type="button"
                        tabIndex="-1"
                        className="btn dropdown-toggle btn-light"
                        data-toggle="dropdown"
                        role="combobox"
                        aria-owns="bs-select-1"
                        aria-haspopup="listbox"
                        aria-expanded="false"
                        title="Full size"
                      >
                        <div className="filter-option">
                          <div className="filter-option-inner">
                            <div className="filter-option-inner-inner">
                              Full size
                            </div>
                          </div>
                        </div>
                      </button>
                      <div className="dropdown-menu ">
                        <div
                          className="inner show"
                          role="listbox"
                          id="bs-select-1"
                          tabIndex="-1"
                        >
                          <ul
                            className="dropdown-menu inner show"
                            role="presentation"
                          ></ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row align-items-end no-gutters mx-n2">
                    <div className="col-sm-4 form-group px-2 mb-5">
                      <label
                        className="text-secondary font-weight-600 mb-3"
                        htmlhtmlFor="number"
                      >
                        Quantity:
                      </label>
                      <div className="input-group position-relative w-100">
                        <a className="down position-absolute pos-fixed-left-center pl-4 z-index-2">
                          <i className="far fa-minus"></i>
                        </a>
                        <input
                          minLength={1}
                          onChange={(e) => setQuantity(e.target.value)}
                          name="number"
                          type="number"
                          id="number"
                          className="form-control w-100 px-6 text-center input-quality text-secondary h-60 fs-18 font-weight-bold border-0"
                        />
                        <a className="up position-absolute pos-fixed-right-center pr-4 z-index-2">
                          <i className="far fa-plus"></i>
                        </a>
                      </div>
                    </div>
                    <div className="col-sm-8 mb-5 w-100 px-2">
                      <button
                        onClick={(e) => handleAddToCart(e, productDesc[0][0])}
                        type="submit"
                        className="btn btn-lg fs-18 btn-secondary btn-block h-60 bg-hover-primary border-0"
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </form>
                <div className="d-flex align-items-center flex-wrap">
                  <a className="text-decoration-none font-weight-bold fs-16 mr-6 d-flex align-items-center">
                    <svg className="icon icon-star-light fs-20"></svg>
                    <span className="ml-2">Add to wishlist</span>
                  </a>
                  <a className="text-decoration-none font-weight-bold fs-16 d-flex align-items-center">
                    <svg className="icon icon-ShareNetwork fs-20"></svg>
                    <span className="ml-2">Share</span>
                  </a>
                </div>
                <ul className="list-unstyled border-top pt-4 mt-5 mb-lg-9 mb-7">
                  <li className="row mb-2">
                    <span className="d-block col-4 col-lg-2 text-secondary font-weight-600 fs-14">
                      Sku:
                    </span>
                    <span className="d-block col-8 col-lg-10">SF09281</span>
                  </li>
                  <li className="row mb-2">
                    <span className="d-block col-4 col-lg-2 text-secondary font-weight-600 fs-14">
                      Categories:
                    </span>
                    <span className="d-block col-8 col-lg-10">
                      Makeup, Skincare
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <h1>No Data Found</h1>
      )}
      <Footer />
    </Sidebar>
  );
};

export default ProductDescription;
