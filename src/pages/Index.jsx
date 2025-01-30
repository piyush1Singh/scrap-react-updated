import React from "react";
import Category from "../component/Category";
import Collection from "../component/Collection";
import FeatureProduct from "../component/FeatureProduct";
import Footer from "../component/Footer";
import MainSlider from "../component/MainSlider";
import SeasonalCollection from "../component/SeasonalCollection";
import Service from "../component/Service";
import Sidebar from "../component/Sidebar";
import "../index.css";

const Index = () => {
  return (
    <div>
      <Sidebar />
      <MainSlider />
      <Category />
      <Collection />
      <SeasonalCollection />
      <FeatureProduct />
      <Service />
      <Footer />
    </div>
  );
};

export default Index;
