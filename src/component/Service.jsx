import React from "react";
import { BsBox, BsCreditCard2Back, BsChatRight } from "react-icons/bs";
import { TbTruckReturn } from "react-icons/tb";

const Service = () => {
  return (
    <div>
      <section
        className="pt-11 pb-xl-9 pb-5"
        style={{ backgroundColor: "#d8e9e5" }}
        data-animated-id="6"
      >
        <div className="container container-xl">
          <div className="row">
            <div className="col-xl-3 col-md-6">
              <div
                className="card bg-transparent border-0 align-items-center text-center mb-xl-0 mb-6 fadeInUp animated"
                data-animate="fadeInUp"
              >
                <div className="card-img">
                  <BsBox />
                </div>
                <div className="card-body text-center">
                  <h3 className="card-title fs-20 mb-2">Free Shipping</h3>
                  <p className="cart-text fs-18 mb-0">
                    Free Shipping for orders over ₹1,30,00
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div
                className="card bg-transparent border-0 align-items-center text-center mb-xl-0 mb-6 fadeInUp animated"
                data-animate="fadeInUp"
              >
                <div className="card-img">
                  <TbTruckReturn />
                </div>
                <div className="card-body text-center">
                  <h3 className="card-title fs-20 mb-2">Returns</h3>
                  <p className="cart-text fs-18 mb-0">
                    Within 5 days for an exchange.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div
                className="card bg-transparent border-0 align-items-center text-center mb-xl-0 mb-6 fadeInUp animated"
                data-animate="fadeInUp"
              >
                <div className="card-img">
                  <BsChatRight />
                </div>
                <div className="card-body text-center">
                  <h3 className="card-title fs-20 mb-2">Online Support</h3>
                  <p className="cart-text fs-18 mb-0">
                    24 hours a day, 7 days a week
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div
                className="card bg-transparent border-0 align-items-center text-center mb-xl-0 mb-6 fadeInUp animated"
                data-animate="fadeInUp"
              >
                <div className="card-img">
                  <BsCreditCard2Back />
                </div>
                <div className="card-body text-center">
                  <h3 className="card-title fs-20 mb-2">Flexible Payment</h3>
                  <p className="cart-text fs-18 mb-0">
                    Pay with Multiple Credit Cards
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
