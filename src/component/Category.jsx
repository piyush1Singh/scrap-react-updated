import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { useCategory } from "../CategoryContext";

const Category = () => {
  const { category } = useCategory();

  const responsive = {
    0: {
      items: 1,
    },
    568: {
      items: 2,
    },
    1024: {
      items: 3,
      itemsFit: "contain",
    },
  };

  const renderCarouselItems = () => {
    return category?.map((item) => {
      return (
        <div className="slick-slide item" data-value="1" key={item[0]}>
          <div className="card border-0 hover-shine hover-zoom-in banner banner-03">
            <div
              className="card-img bg-img-cover-center"
              // backgroundImage: `url(../../Admin-panel/Dashboard-admin/src/assets/categoriesImages/${item[3]})`,
              // Above Code Reference For Category Image Link To Show Img From Folder Code
              style={{
                backgroundImage: `url(${item[3]})`,
              }}
            ></div>
            <div className="card-img-overlay d-inline-flex flex-column px-7 pt-7 pb-6 justify-content-end">
              <h3 className="card-title center-text-color fs-26">{item[1]}</h3>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <section className="ptb-60">
      <div className="container">
        <h2 className="category-title">Shop By Category</h2>
        {category && category.length > 0 ? (
          <AliceCarousel
            mouseTracking
            disableDotsControls
            autoPlayInterval={2000}
            animationDuration={2000}
            autoPlay
            infinite
            disableButtonsControls
            items={renderCarouselItems()}
            responsive={responsive}
          />
        ) : (
          <p>Loading categories...</p>
        )}
      </div>
    </section>
  );
};

export default Category;
