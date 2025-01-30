import React, { useEffect, useState, useRef } from "react";
import { RxCross2 } from "react-icons/rx";
import "../index.css";
import incrementCart from "./IncrementFunction";
import { Link } from "react-router-dom";

const CartSidebar = (props) => {
  const [id, setId] = useState(null);

  const htmlRef = useRef("");

  const fetchProductById = async (incrementCart) => {
    var newData = ""; // Initialize an empty string to store the generated HTML
    let arr = []; // Initialize an empty array
    for (const value of props.cart || []) {
      // Iterate over the `props.cart` array or an empty array if `props.cart` is falsy
      try {
        // Send a POST request to the specified URL and pass the `value.id` as the request body
        let url = await fetch(
          "http://localhost/Scrap-react/Admin-panel/Api-Calls/Product/fetchproductbyid.php",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id: value.id, // Use value.id to specify the product ID for the request
            }),
          }
        );

        // Extract the JSON data from the response
        let data = await url.json();
        console.log(data);

        for (let index = 0; index < data.length; index++) {
          // Iterate over the `data` array
          newData +=
            // Generate HTML string based on the retrieved data
            "<div className='mb-4 d-flex'>" +
            "<a href='' className='d-flex align-items-center mr-2 text-muted'><i className='fal fa-times'></i></a>" +
            "<div className='media w-100'>" +
            "<div className='w-60px mr-3'>" +
            "<img src=" +
            data[index][3] +
            "alt='Natural Coconut Cleansing Oil'>" +
            "</div>" +
            "<div className='media-body d-flex'>" +
            "<div className='cart-price pr-6'>" +
            " <p className='fs-14 font-weight-bold text-secondary mb-1'><span className='font-weight-500 fs-13 text-line-through text-body mr-1'> " +
            (
              parseInt((data[index][4] / 100) * 10) + parseInt(data[index][4])
            ).toLocaleString("en-IN", {
              style: "currency",
              currency: "INR",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            }) +
            "</span>" +
            parseInt(data[index][4]).toLocaleString("en-IN", {
              style: "currency",
              currency: "INR",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            }) +
            "     </p>" +
            "      <a href='product-detail.html' className='text-secondary'>" +
            data[index][1] +
            "</a>" +
            "   </div>" +
            "   <div className='position-relative ml-auto'>" +
            "       <div className='input-group'>" +
            "            <a className='down position-absolute pos-fixed-left-center pl-2' > - </a>" +
            "           <input type='number' className='number-cart w-90px px-6 text-center h-40px bg-input border-0' value=" +
            value.quantity +
            " disabled>" +
            "<a className='up position-absolute pos-fixed-right-center pr-2' onclick='(" +
            //Increment Function Not Working
            incrementCart +
            ")(" +
            data[index][0] +
            ")'> + </a>" +
            //Increment Function Not Working
            "         </a>" +
            "        </div>" +
            "    </div>" +
            "  </div>" +
            " </div>" +
            " </div>";
        }
        // Saving Cart Data In htmlref if New Product Added In Cart
        htmlRef.current.innerHTML = newData;
      } catch (error) {
        console.error(error);
      }
    }
    return newData; // Return the generated HTML string
  };

  useEffect(() => {
    // Call the `fetchProductById` function with the `incrementCart` parameter
    fetchProductById(incrementCart);
  }, [fetchProductById]);

  return (
    <div>
      <div
        className={`canvas-sidebar cart-canvas ${props.showCart ? "show" : ""}`}
      >
        <div className="canvas-overlay"></div>
        <div className="card border-0 pt-4 pb-7 h-100">
          <div className="px-6 text-right">
            <span className="canvas-close d-inline-block fs-24 mb-1 ml-auto lh-1 text-primary">
              <RxCross2 onClick={() => props.setShowCart(false)} />
            </span>
          </div>
          <div className="card-header bg-transparent p-0 mx-6">
            <h3 className="fs-24 mb-5">Shopping bag</h3>
            <p className="fs-15 font-weight-500 text-body mb-5">
              <span className="d-inline-block mr-2 fs-15 text-secondary">
                <i className="far fa-check-circle"></i>
              </span>
              Your cart is saved for the next
              <span className="text-secondary">4m34s</span>
            </p>
          </div>
          {/* <button className="d-none" onClick={fetchProductById()}></button> */}
          <div
            className="card-body px-6 pt-7 overflow-y-auto"
            // Data Printed By Ref
            ref={htmlRef}
          ></div>
          {/* {props.cart?.map((value) => {
            {   
              /* return <h1>{fetchProductById(value.id)}</h1>; 
          })} */}

          <div className="card-footer mt-auto border-0 bg-transparent px-6 pb-0 pt-5">
            <div className="d-flex align-items-center mb-2">
              <span className="text-secondary fs-15">Total price:</span>
              <span className="d-block ml-auto fs-24 font-weight-bold text-secondary">
                $106.00
              </span>
            </div>
            <Link
              to="/checkout"
              className="btn btn-secondary btn-block mb-3 bg-hover-primary border-hover-primary"
            >
              Check Out
            </Link>
            <Link
              to="/checkout"
              className="btn btn-outline-secondary btn-block"
            >
              View Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;
