import React, { useState, useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { AiOutlineArrowRight } from "react-icons/ai";

const MainSlider = () => {
  const [banner, setBanner] = useState([]); // Declare a state variable `banner` and its setter function `setBanner`

  const fetchBanner = async () => {
    // Asynchronous function to fetch banner data from an API endpoint
    let url = await fetch(
      // Send a fetch request to the specified URL
      "http://localhost/Scrap-react/Admin-panel/Api-Calls/Banner/fetchallBanner.php"
    );
    let data = await url.json(); // Extract the JSON data from the response
    setBanner(data); // Update the `banner` state with the retrieved data
  };

  useEffect(() => {
    // Use the `useEffect` hook to fetch banner data when the component mounts
    fetchBanner();
  }, []);

  const renderCarouselItems = () => {
    // Function to render the carousel items based on the banner data
    return banner.map((item) => {
      // Map over the `banner` array and return a section element for each item
      return (
        <section cla="mx-0 slick-slider dots-inner-center custom-slider-02 slider">
          <div
            className="item"
            style={{
              // Set the background image of the item based on the item's URL in the `banner` data
              backgroundImage: `url(../../Admin-panel/Dashboard-admin/src/assets/bannerImages/${item[3]})`,
            }}
          >
            <div className="container">
              <div className="py-lg-17">
                <p className="slider-p"> {item[1]}</p>
                <h2
                  className="fs-md-68"
                  style={{ overflow: "visible", width: "50%" }}
                >
                  {item[2]}
                </h2>
                <a className="">
                  Discover Now
                  <AiOutlineArrowRight />
                </a>
              </div>
            </div>
          </div>
        </section>
      );
    });
  };

  return (
    <AliceCarousel
      items={renderCarouselItems()}
      responsive={{ 0: { items: 1 }, 1024: { items: 1 } }}
      autoPlay
      mouseTracking
      infinite
      disableDotsControls
      disableButtonsControls
      autoPlayInterval={3000}
    />
  );
};

export default MainSlider;
