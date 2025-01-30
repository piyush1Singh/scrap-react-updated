import React from "react";
import { FaFacebookF } from "react-icons/fa";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <footer
        className="pt-10 pt-lg-13 pb-8 footer text-light bg-cover"
        style={{
          backgroundImage: "url('/src/assets/images/banner/bg-footer-01.jpg')",
        }}
      >
        <div className="container container-xl">
          <div className="row">
            <div className="col-lg-5 col-12 mb-8 mb-lg-0">
              <h3 className="mb-4 text-light">Good emails.</h3>
              <p className="mr-xl-17 mb-6 mb-lg-7">
                Enter your email below to be the first to know about new
                collections and product launches.
              </p>
              <form className="pr-xl-15">
                <div className="input-group position-relative">
                  <input
                    type="email"
                    className="form-control rounded border-0 pr-10"
                    placeholder="Enter your email address"
                  />
                  <button
                    type="submit"
                    className="btn fs-29 text-secondary position-absolute pos-fixed-right-center px-4 py-0 h-100 lh-1 z-index-10"
                  >
                    <AiOutlineArrowRight />
                  </button>
                </div>
              </form>
            </div>
            <div className="col-lg col-md-4 col-12 mb-7 mb-md-8 mb-lg-0">
              <h3 className="fs-20 mb-3 text-light">Company</h3>
              <p className="fs-14 lh-185 pr-xl-12">
                Find a location nearest you. See
                <a className="text-light font-weight-600">
                  <u>Our Stores</u>
                </a>
              </p>
              <p className="fs-14 lh-185 mb-0">
                <strong>+391 (0)35 2568 4593</strong>
                <br />
                hello@domain.com
              </p>
            </div>
            <div className="col-lg col-md-4  col-12 mb-7 mb-md-8 mb-lg-0">
              <h3 className="fs-20 mb-3 text-light">Useful links</h3>
              <ul className="list-unstyled mb-0">
                <li className="pb-1">
                  <a className="text-light lh-175">New Products</a>
                </li>
                <li className="py-1">
                  <a className="text-light lh-175">Best Sellers</a>
                </li>
                <li className="py-1">
                  <a className="text-light lh-175">Bundle &amp; Save</a>
                </li>
                <li className="pt-1">
                  <a className="text-light lh-175">Online Gift Card</a>
                </li>
              </ul>
            </div>
            <div className="col-lg col-md-4 col-12 mb-7 mb-md-8 mb-lg-0">
              <h3 className="fs-20 mb-3 text-light">Social Media</h3>
              <ul className="list-inline fs-20 mb-0">
                <li className="list-inline-item mr-5">
                  <a className="text-light">
                    <AiOutlineTwitter />
                  </a>
                </li>
                <li className="list-inline-item mr-5">
                  <a className="text-light">
                    <FaFacebookF />
                  </a>
                </li>
                <li className="list-inline-item mr-5">
                  <a className="text-light">
                    <AiOutlineInstagram />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="text-light">
                    <BsYoutube />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row mt-0 mt-lg-14 align-items-center">
            <div className="col-12 col-md-6 col-lg-4">
              <p className="mb-0">
                Copyright © 2023 DP Jewels. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
