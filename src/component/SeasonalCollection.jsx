import React from "react";

const SeasonalCollection = () => {
  let border = {
    border: "1px solid #edf1f0",
  };
  let backgroundColor = {
    backgroundColor: " #EDF1F0",
  };

  return (
    <div>
      <section data-animated-id="4" style={border}>
        <div className="row flex-img-row-reverse  mx-0">
          <div
            className="col-lg-6 py-xl-17 py-lg-12 py-8"
            style={backgroundColor}
          >
            <div className="mw-lg-695 ml-auto py-lg-7">
              <div className="fs-15 font-weight-600 text-uppercase letter-spacing-01 pb-4 text-secondary">
                Seasonal Collections
              </div>
              <h2 className="fs-40">
                Jewelry Inspired
                <br />
                By Beauty
              </h2>
              <p className="mb-0 fs-18 pt-1 text-body">
                A necklace is a piece of jewelry that is worn around the neck.
              </p>
              <a className="btn btn-md rounded btn-light mt-6">Discover Now</a>
            </div>
          </div>
          <div className="col-lg-6  d-flex align-items-center justify-content-center py-lg-0 py-md-17 py-13 ">
            <img src="/src/assets/images/banner/banner-02.png" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SeasonalCollection;
