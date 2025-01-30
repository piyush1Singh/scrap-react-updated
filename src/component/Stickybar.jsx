import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";

const Stickybar = () => {
  return (
    <div>
      <div className="topbar d-none d-xl-block bg-col">
        <div className="container container-xl d-flex justify-content-between">
          <ul className="list-inline d-flex align-items-center mb-0">
            <li className="list-inline-item mr-5">
              <a className="fs-14 lh-1">
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="list-inline-item mr-5">
              <a className="fs-14 lh-1">
                <FaFacebookF />
              </a>
            </li>
            <li className="list-inline-item cl-white mr-5">
              <a className="fs-14 lh-1">
                <AiOutlineInstagram />
              </a>
            </li>
            <li className="list-inline-item mr-5">
              <a className="fs-14 lh-1">
                <BsYoutube />
              </a>
            </li>
          </ul>
          <p className="mb-0 fs-13 font-weight-bold text-primary letter-spacing-01 text-uppercase">
            Free shipping on all India. orders ₹500+
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stickybar;
