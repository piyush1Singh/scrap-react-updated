import React, { useContext } from "react";
import Modal from "react-bootstrap/Modal";
import { CartContext } from "../CartContext";
import { AiOutlineEye, AiOutlineStar, AiFillStar } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";

const ProductModal = (props) => {
  const { quantity, saveToCart, setQuantity } = useContext(CartContext);
  // Destructuring assignment to retrieve `quantity`, `saveToCart`, and `setQuantity` from the `CartContext`

  const handleAddToCart = (e) => {
    // Event handler function for adding the product to the cart
    e.preventDefault(); // Prevent the default form submission behavior
    saveToCart(e, props.productId[0][0]);
    // Call the `saveToCart` function from the `CartContext` and pass the event and the product ID as arguments
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
    <Modal
      className="modal-xxl"
      show={props.show}
      onHide={props.handleClose}
      size="xl"
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div className="pt-0">
          <div className="row">
            <div className="col-md-6 pr-xl-5 mb-8 mb-md-0 pl-xl-8">
              <div className="galleries-product product galleries-product-02 position-relative">
                <div className="position-absolute pos-fixed-top-right z-index-2">
                  <div className="content-change-vertical">
                    <a
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Add to wishlist"
                      className="add-to-wishlist d-flex align-items-center justify-content-center text-secondary bg-white hover-white bg-hover-secondary w-48px h-48px rounded-circle mt-3 mr-3"
                    >
                      <svg className="icon icon-star-light fs-24"></svg>
                    </a>
                  </div>
                </div>
                <div className="view-slider-for mx-0">
                  <div className="box px-0">
                    <div className="card p-0 rounded-0 border-0">
                      <a className="card-img">
                        {Array.isArray(props.productId) &&
                        props.productId.length ? (
                          <img
                            //(../../Admin-panel/Dashboard-admin/src/assets/productImages/)
                            // Above Code Reference For Category Image Link To Show Img From Folder Code
                            src={`${props.productId[0][3]}`}
                            alt="product gallery"
                          />
                        ) : (
                          <h1>No img Found</h1>
                        )}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 pl-xl-6 pr-xl-8">
              {Array.isArray(props.productId) && props.productId.length ? (
                <>
                  <p className="d-flex align-items-center mb-3">
                    <span className="text-line-through">
                      {(
                        parseInt((props.productId[0][4] / 100) * 10) +
                        parseInt(props.productId[0][4])
                      ).toLocaleString("en-IN", {
                        style: "currency",
                        currency: "INR",
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      })}
                    </span>
                    <span className="fs-18 text-secondary font-weight-bold ml-3">
                      {parseInt(props.productId[0][4]).toLocaleString("en-IN", {
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
                  <h1 className="fs-24 mb-2">{props.productId[0][1]}</h1>
                  <div className="d-flex align-items-center flex-wrap mb-3 lh-12">
                    <ul className="list-inline d-flex mb-0 rating-result">
                      {ratings(props.productId[0][6])}
                    </ul>
                  </div>
                  <p className="mb-4 mr-xl-6">{props.productId[0][2]}</p>
                  <p className="mb-2" />
                  <form>
                    <div className="form-group shop-swatch mb-4 d-flex align-items-center">
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
                      <select
                        name="swatches"
                        className="form-select swatches-select d-none"
                        aria-label="Default select example"
                      >
                        <option selected value="full size">
                          Full size
                        </option>
                        <option value="mini size">Mini size</option>
                      </select>
                    </div>
                    <div className="row align-items-end no-gutters mx-n2">
                      <div className="col-sm-4 form-group px-2 mb-6">
                        <label
                          className="text-secondary font-weight-600 mb-3"
                          htmlFor="quickview-number"
                        >
                          Quantity:
                        </label>
                        <div className="input-group position-relative w-100">
                          <a className="down position-absolute pos-fixed-left-center pl-4 z-index-2">
                            <i className="far fa-minus"></i>
                          </a>
                          <input
                            name="number"
                            type="number"
                            id="quickview-number"
                            className="form-control w-100 px-6 text-center input-quality text-secondary h-60 fs-18 font-weight-bold border-0"
                            minLength={1}
                            onChange={(e) => setQuantity(e.target.value)}
                            required
                          />
                          <a className="up position-absolute pos-fixed-right-center pr-4 z-index-2">
                            <i className="far fa-plus"></i>
                          </a>
                        </div>
                      </div>
                      <div className="col-sm-8 mb-6 w-100 px-2">
                        {Array.isArray(props.productId) &&
                        props.productId.length ? (
                          <button
                            className="btn btn-lg fs-18 btn-secondary btn-block h-60 bg-hover-primary border-0"
                            onClick={(e) =>
                              handleAddToCart(e, props.productId[0][0])
                            }
                          >
                            Add To Bag
                          </button>
                        ) : (
                          <h1>No Id Found</h1>
                        )}
                      </div>
                    </div>
                  </form>
                  <div className="d-flex align-items-center flex-wrap">
                    <a className="text-decoration-none font-weight-bold fs-16 mr-6 d-flex align-items-center">
                      <svg className="icon icon-star-light fs-20"></svg>
                      <span className="ml-2">Add to wishlist</span>
                    </a>
                    <a className="text-decoration-none font-weight-bold fs-16 d-flex align-items-center">
                      <svg className="icon icon-ShareNetwork"></svg>
                      <span className="ml-2">Share</span>
                    </a>
                  </div>
                  <ul className="list-unstyled border-top pt-5 mt-5">
                    <li className="row mb-2">
                      <span className="d-block col-4 col-lg-2 text-secondary font-weight-600 fs-14">
                        Sku:
                      </span>
                      <span className="d-block col-8 col-lg-10 fs-14">
                        SF09281
                      </span>
                    </li>
                    <li className="row mb-2">
                      <span className="d-block col-4 col-lg-2 text-secondary font-weight-600 fs-14">
                        Categories:
                      </span>
                      <span className="d-block col-8 col-lg-10 fs-14">
                        Makeup, Skincare
                      </span>
                    </li>
                  </ul>
                </>
              ) : (
                <h1>Something Gone Wrong</h1>
              )}
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ProductModal;
