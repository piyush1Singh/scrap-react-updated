import React, { useState, useEffect, useContext } from "react";
import Sidebar from "../component/Sidebar";
import { Link, useParams } from "react-router-dom";
import { CartContext } from "../CartContext";
import ProductModal from "../component/ProductModal";
import { AiOutlineEye, AiOutlineStar, AiFillStar } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";

const CategoryProduct = (props) => {
  const [productId, setProductId] = useState([]);

  //Modal start for Product Modal
  const [show, setShow] = useState(false);
  //Bootstrap Modal Show
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Categories Product Modal
  const showProductModal = async (value) => {
    // Trigger the `handleShow()` function
    handleShow();
    // Send a POST request to the specified URL and pass the `value` parameter as the request body
    let url = await fetch(
      "http://localhost/Scrap-react/Admin-panel/Api-Calls/Product/fetchproductbyId.php",
      {
        method: "POST",
        body: JSON.stringify({
          id: value,
        }),
      }
    );

    // Extract the JSON data from the response
    let data = await url.json();

    // Set the `productId` state variable with the extracted data
    setProductId(data);
  };

  const param = useParams();
  // The `useParams` hook is used to extract the parameters from the current route. It returns an object containing the parameters. In this case, the `param` variable will store the parameters extracted from the route.

  const [categories, setCategories] = useState();
  // The `categories` variable is defined using the `useState` hook. It initializes the state with an undefined value. The `setCategories` function is used to update the value of the `categories` state.

  const fetchProductCategory = async () => {
    // Send a POST request to the specified URL and pass the `param.id` as the request body
    let url = await fetch(
      "http://localhost/Scrap-react/Admin-panel/Api-Calls/Product/fetchProductbyCategories.php",
      {
        method: "POST",
        body: JSON.stringify({
          id: param.id,
        }),
      }
    );
    // Extract the JSON data from the response
    let data = await url.json();
    // Update the `categories` state variable with the extracted data
    setCategories(data);
    console.log(data);
  };

  useEffect(() => {
    // Call the `fetchProductCategory` function when the component mounts
    fetchProductCategory();
  }, []);

  const handleAddToCart = (e, value) => {
    e.preventDefault();
    saveToCart(e, value);
  };

  const { quantity, saveToCart, setQuantity } = useContext(CartContext);

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
    <>
      <Sidebar>
        <section className="py-2 bg-gray-2">
          <div className="container">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb breadcrumb-site py-0 d-flex justify-content-center">
                <li className="breadcrumb-item">
                  <a className="text-decoration-none text-body" href="/">
                    Home
                  </a>
                </li>
                <li
                  className="breadcrumb-item active pl-0 d-flex align-items-center"
                  aria-current="page"
                >
                  Shop Grid layout
                </li>
              </ol>
            </nav>
          </div>
        </section>
        <section>
          <div className="container container-xl">
            <h2 className="text-center mt-9 mb-8">Product</h2>
            <div className="d-flex justify-content-between align-items-center flex-wrap">
              <p className="fs-18 font-weight-500 my-lg-0 my-2">
                We found
                <strong className="font-weight-bold text-secondary">95</strong>
                products available for you
              </p>
              <div className="d-flex align-items-center">
                <div className="dropdown show lh-1 rounded ml-lg-5 ml-0">
                  <a
                    className="dropdown-toggle custom-dropdown-toggle text-decoration-none text-secondary p-3 mw-210 position-relative d-block"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Default Sorting
                  </a>
                  <div
                    className="dropdown-menu custom-dropdown-item"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a className="dropdown-item">Price high to low</a>
                    <a className="dropdown-item">Price low to high</a>
                    <a className="dropdown-item">Random</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-7 pb-11 pb-lg-13">
          <div className="container container-xl">
            <div className="row">
              <div
                className="col-lg-3 primary-sidebar sidebar-sticky pr-lg-8 d-lg-block d-none"
                id="sidebar"
              >
                <div className="primary-sidebar-inner">
                  <div className="card border-0 mb-6">
                    <div className="card-header bg-transparent border-0 p-0">
                      <h4 className="card-title fs-20 mb-3">Categories</h4>
                    </div>
                    <div className="card-body p-0">
                      <ul className="list-unstyled mb-0">
                        <li className="mb-2">
                          <a className="text-uppercase fs-14 letter-spacing-005 font-weight-600 text-body hover-secondary text-decoration-none">
                            BODY CARE
                          </a>
                        </li>
                        <li className="mb-2">
                          <a className="text-uppercase fs-14 letter-spacing-005 font-weight-600 text-body hover-secondary text-decoration-none">
                            Skin care
                          </a>
                          <ul className="list-unstyled ml-5 mt-2 mb-5">
                            <li className="mb-1">
                              <a className="text-body hover-secondary">
                                Cleanser
                              </a>
                            </li>
                            <li className="mb-1">
                              <a className="text-body hover-secondary">Toner</a>
                            </li>
                            <li className="mb-1">
                              <a className="text-body hover-secondary">
                                Scrubs & Masks
                              </a>
                            </li>
                            <li className="mb-1">
                              <a className="text-body hover-secondary">Serum</a>
                            </li>
                            <li className="mb-1">
                              <a className="text-body hover-secondary">
                                Face Oils
                              </a>
                            </li>
                            <li className="mb-1">
                              <a className="text-body hover-secondary">
                                Moisturizer
                              </a>
                            </li>
                            <li className="mb-1">
                              <a className="text-body hover-secondary">
                                Eye Cream
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="mb-2">
                          <a className="text-uppercase fs-14 letter-spacing-005 font-weight-600 text-body hover-secondary text-decoration-none">
                            Hair CARE
                          </a>
                        </li>
                        <li className="mb-2">
                          <a className="text-uppercase fs-14 letter-spacing-005 font-weight-600 text-body hover-secondary text-decoration-none">
                            ACCESSORIES
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card border-0 mb-6">
                    <div className="card-header bg-transparent border-0 p-0">
                      <h4 className="card-title fs-20 mb-3">Hightlight</h4>
                    </div>
                    <div className="card-body p-0">
                      <ul className="list-unstyled mb-0">
                        <li className="mb-2">
                          <a className="text-body hover-secondary">
                            Best Seller
                          </a>
                        </li>
                        <li className="mb-2">
                          <a className="text-body hover-secondary">
                            New Arrivals
                          </a>
                        </li>
                        <li className="mb-2">
                          <a className="text-body hover-secondary">Sale</a>
                        </li>
                        <li className="mb-2">
                          <a className="text-body hover-secondary">Hot Items</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card border-0 mb-6">
                    <div className="card-header bg-transparent border-0 p-0">
                      <h4 className="card-title fs-20 mb-3">Price</h4>
                    </div>
                    <div className="card-body p-0">
                      <ul className="list-unstyled mb-0">
                        <li className="mb-2">
                          <a className="text-body hover-secondary">
                            <span>All</span>
                          </a>
                        </li>
                        <li className="mb-2">
                          <a className="text-body hover-secondary">
                            <span>$50</span>
                            <span> - </span>
                            <span>$99</span>
                          </a>
                        </li>
                        <li className="mb-2">
                          <a className="text-body hover-secondary">
                            <span>$100</span>
                            <span> - </span>
                            <span>$499</span>
                          </a>
                        </li>
                        <li className="mb-2">
                          <a className="text-body hover-secondary">
                            <span>$500</span>
                            <span> - </span>
                            <span>$2000</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card border-0 mb-6">
                    <div className="card-header bg-transparent border-0 p-0">
                      <h4 className="card-title fs-20 mb-3">Size</h4>
                    </div>
                    <div className="card-body p-0">
                      <ul className="list-unstyled mb-0">
                        <li className="mb-2">
                          <a className="text-body hover-secondary">Single</a>
                        </li>
                        <li className="mb-2">
                          <a className="text-body hover-secondary">5 Pack</a>
                        </li>
                        <li className="mb-2">
                          <a className="text-body hover-secondary">Full size</a>
                        </li>
                        <li className="mb-2">
                          <a className="text-body hover-secondary">Mini size</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card border-0 mb-6">
                    <div className="card-header bg-transparent border-0 p-0">
                      <h4 className="card-title fs-20 mb-3">Color</h4>
                    </div>
                    <div className="card-body p-0">
                      <ul className="list-unstyled mb-0 widget-color d-flex flex-column">
                        <li className="mb-1">
                          <a className="d-inline-flex align-items-center text-body text-decoration-none">
                            <span className="d-block item"></span>
                            <span className="ml-2">Black</span>
                          </a>
                        </li>
                        <li className="mb-1">
                          <a className="d-inline-flex align-items-center text-body text-decoration-none">
                            <span className="d-block item border"></span>
                            <span className="ml-2">White</span>
                          </a>
                        </li>
                        <li className="mb-1">
                          <a className="d-inline-flex align-items-center text-body text-decoration-none">
                            <span className="d-block item"></span>
                            <span className="ml-2">Pink</span>
                          </a>
                        </li>
                        <li className="mb-1">
                          <a className="d-inline-flex align-items-center text-body text-decoration-none">
                            <span className="d-block item"></span>
                            <span className="ml-2">Maroon</span>
                          </a>
                        </li>
                        <li className="mb-1">
                          <a className="d-inline-flex align-items-center text-body text-decoration-none">
                            <span className="d-block item"></span>
                            <span className="ml-2">Red</span>
                          </a>
                        </li>
                        <li className="mb-1">
                          <a className="d-inline-flex align-items-center text-body text-decoration-none">
                            <span className="d-block item"></span>
                            <span className="ml-2">Dark Heathe</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card border-0">
                    <div className="card-header bg-transparent border-0 p-0">
                      <h3 className="card-title fs-20 mb-3">Tags</h3>
                    </div>
                    <div className="card-body p-0">
                      <ul className="list-inline mb-0">
                        <li className="list-inline-item mr-2 pb-1">
                          <a className="text-body hover-secondary">Cleansing</a>
                        </li>
                        <li className="list-inline-item mr-2 pb-1">
                          <a className="text-body hover-secondary">Make up</a>
                        </li>
                        <li className="list-inline-item mr-2 pb-1">
                          <a className="text-body hover-secondary">eye cream</a>
                        </li>
                        <li className="list-inline-item mr-2 pb-1">
                          <a className="text-body hover-secondary">nail</a>
                        </li>
                        <li className="list-inline-item mr-2 pb-1">
                          <a className="text-body hover-secondary">oil</a>
                        </li>
                        <li className="list-inline-item mr-2 pb-1">
                          <a className="text-body hover-secondary">shampoo</a>
                        </li>
                        <li className="list-inline-item mr-2 pb-1">
                          <a className="text-body hover-secondary">
                            coffee bean
                          </a>
                        </li>
                        <li className="list-inline-item mr-2 pb-1">
                          <a className="text-body hover-secondary">healthy</a>
                        </li>
                        <li className="list-inline-item mr-2 pb-1">
                          <a className="text-body hover-secondary">skin care</a>
                        </li>
                        <li className="list-inline-item mr-2 pb-1">
                          <a className="text-body hover-secondary">sale</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="row">
                  {categories?.map((value, key) => (
                    <div className="col-xl-4 col-lg-4 col-md-6" key={key}>
                      <div
                        className="card border-0 product mb-6"
                        data-animate="fadeInUp"
                      >
                        <div className="position-relative">
                          <img
                            src={value[3]}
                            alt="Geometric Fleur CZ Diamond Ring"
                          />
                          <div className="card-img-overlay d-flex p-3 flex-column">
                            <div className="mb-auto d-flex justify-content-center">
                              <div>
                                <span className="badge badge-primary"></span>
                              </div>
                              <div className="w-100 content-change-vertical">
                                <a
                                  data-toggle="tooltip"
                                  data-placement="left"
                                  title="Add to wishlist"
                                  className="add-to-wishlist ml-auto d-flex align-items-center justify-content-center text-secondary bg-white hover-white bg-hover-secondary w-40px h-40px rounded-circle mb-2"
                                >
                                  <BsHandbag />
                                </a>
                                <a
                                  onClick={() => showProductModal(value[0])}
                                  data-toggle="tooltip"
                                  data-placement="left"
                                  title="Quick view"
                                  className="preview ml-auto d-md-flex align-items-center justify-content-center cursor-pointer text-secondary bg-white hover-white bg-hover-secondary w-40px h-40px rounded-circle mb-2 d-none"
                                >
                                  <AiOutlineEye />
                                </a>
                                <a
                                  data-toggle="tooltip"
                                  data-placement="left"
                                  title="View Product"
                                  className="preview ml-auto d-md-flex align-items-center justify-content-center cursor-pointer text-secondary bg-white hover-white bg-hover-secondary w-40px h-40px rounded-circle mb-2 d-none"
                                >
                                  <AiOutlineStar />
                                </a>
                              </div>
                            </div>
                            <div className="text-center">
                              <a
                                onClick={(e) => handleAddToCart(e, value[0])}
                                className="btn btn-secondary bg-hover-primary border-hover-primary lh-12"
                              >
                                Add To Cart
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="card-body pt-4 text-center px-0">
                          <p className="card-text font-weight-bold fs-16 mb-1 text-secondary">
                            <span className="fs-13 font-weight-500 text-line-through text-decoration-through text-body pr-1">
                              {(
                                parseInt((value[4] / 100) * 10) +
                                parseInt(value[4])
                              ).toLocaleString("en-IN", {
                                style: "currency",
                                currency: "INR",
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 0,
                              })}
                            </span>
                            <span>
                              {parseInt(value[4]).toLocaleString("en-IN", {
                                style: "currency",
                                currency: "INR",
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 0,
                              })}
                            </span>
                          </p>
                          <h2 className="card-title fs-15 font-weight-500 mb-2">
                            <Link to={"/product/" + value[0]}>{value[1]}</Link>
                          </h2>
                          <div className="d-flex align-items-center justify-content-center flex-wrap">
                            <ul className="list-inline mb-0 lh-1">
                              {ratings(value[6])}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                // Sending data From Props To Show Modal And Close Modal Using
                Product Id
                <ProductModal
                  show={show}
                  productId={productId}
                  handleClose={handleClose}
                />
                <nav className="pt-3">
                  <ul className="pagination justify-content-center align-items-center mb-0 fs-16 font-weight-600">
                    <li className="page-item fs-18 d-none d-sm-block">
                      <a
                        className="page-link rounded-circle w-40px h-40 p-0 justify-content-center align-items-center d-flex"
                        tabIndex="-1"
                      >
                        <i className="far fa-angle-double-left"></i>
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link rounded-circle w-40px h-40 p-0 justify-content-center align-items-center d-flex">
                        1
                      </a>
                    </li>
                    <li className="page-item active" aria-current="page">
                      <a className="page-link rounded-circle w-40px h-40 p-0 justify-content-center align-items-center d-flex">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link rounded-circle w-40px h-40 p-0 justify-content-center align-items-center d-flex">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link rounded-circle w-40px h-40 p-0 justify-content-center align-items-center d-flex">
                        4
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link rounded-circle w-40px h-40 p-0 justify-content-center align-items-center d-flex">
                        5
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link rounded-circle w-40px h-40 p-0 justify-content-center align-items-center d-flex">
                        ...
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link rounded-circle w-40px h-40 p-0 justify-content-center align-items-center d-flex">
                        16
                      </a>
                    </li>
                    <li className="page-item fs-18 d-none d-sm-block">
                      <a className="page-link rounded-circle w-40px h-40 p-0 justify-content-center align-items-center d-flex">
                        <i className="far fa-angle-double-right"></i>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </section>
      </Sidebar>
    </>
  );
};

export default CategoryProduct;
