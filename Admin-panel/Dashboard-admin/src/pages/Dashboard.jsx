import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  const [activeProduct, setActiveProduct] = useState([""]);
  const [activeCategories, setActiveCategories] = useState([""]);
  const [activeCollection, setActiveCollection] = useState([""]);
  const [activeBanner, setActiveBanner] = useState([""]);

  const fetchProduct = async () => {
    let url = await fetch(
      "http://localhost/Scrap-react/Admin-panel/Api-Calls/Dashboard/productCount.php"
    );
    let data = await url.json();
    setActiveProduct(data);
  };

  const fetchCategories = async () => {
    let url = await fetch(
      "http://localhost/Scrap-react/Admin-panel/Api-Calls/Dashboard/categoriesCount.php"
    );
    let data = await url.json();
    setActiveCategories(data);
  };

  const fetchBanner = async () => {
    let url = await fetch(
      "http://localhost/Scrap-react/Admin-panel/Api-Calls/Dashboard/bannerCount.php"
    );
    let data = await url.json();
    setActiveBanner(data);
  };

  const fetchCollection = async () => {
    let url = await fetch(
      "http://localhost/Scrap-react/Admin-panel/Api-Calls/Dashboard/featuredCollectionCount.php"
    );
    let data = await url.json();
    setActiveCollection(data);
  };

  let dataFetchFunction = () => {
    fetchProduct();
    fetchCategories();
    fetchBanner();
    fetchCollection();
  };

  useEffect(() => {
    dataFetchFunction();
  }, []);

  return (
    <Sidebar>
      <div className="px-20">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="box">
                <div className="title">
                  <div className="active">
                    <h3 className="text-danger">InActive Product</h3>
                    <p className="fs-20">
                      {activeProduct[0][0] == "" ? 0 : activeProduct[0][0]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="box">
                <div className="title">
                  <div className="active">
                    <h3 className="text-danger">InActive Categories</h3>
                    <p className="fs-20">
                      {activeCategories[0][0] == ""
                        ? 0
                        : activeCategories[0][0]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="box">
                <div className="title">
                  <div className="active">
                    <h3 className="text-danger">InActive Banner</h3>
                    <p className="fs-20">
                      {activeBanner[0][0] == "" ? 0 : activeBanner[0][0]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="box">
                <div className="title">
                  <div className="active">
                    <h3 className="text-danger">InActive Collection</h3>
                    <p className="fs-20">
                      {activeCollection[0][0] == ""
                        ? 0
                        : activeCollection[0][0]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row px-10">
            <div className="col-lg-3">
              <div className="box">
                <div className="title">
                  <div className="active">
                    <h3 className="text-primary">Active Product</h3>
                    <p className="fs-20">
                      {activeProduct[0][1] == "" ? 0 : activeProduct[0][1]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="box">
                <div className="title">
                  <div className="active">
                    <h3 className="text-primary">Active Categories</h3>
                    <p className="fs-20">
                      {activeCategories[0][1] == ""
                        ? 0
                        : activeCategories[0][1]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="box">
                <div className="title">
                  <div className="active">
                    <h3 className="text-primary">Active Banner</h3>
                    <p className="fs-20">
                      {activeBanner[0][1] == "" ? 0 : activeBanner[0][1]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="box">
                <div className="title">
                  <div className="active">
                    <h3 className="text-primary">Active Collection</h3>
                    <p className="fs-20">
                      {activeCollection[0][1] == ""
                        ? 0
                        : activeCollection[0][1]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row px-10">
            <div className="col-lg-3">
              <div className="box">
                <div className="title">
                  <div className="active">
                    <h3 className="text-success">Total Product</h3>
                    <p className="fs-20">
                      {activeProduct[0][2] == "" ? 0 : activeProduct[0][2]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="box">
                <div className="title">
                  <div className="active">
                    <h3 className="text-success">Total Categories</h3>
                    <p className="fs-20">
                      {activeProduct[0][2] == "" ? 0 : activeCategories[0][2]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="box">
                <div className="title">
                  <div className="active">
                    <h3 className="text-success">Total Banner</h3>
                    <p className="fs-20">
                      {activeBanner[0][2] == "" ? 0 : activeBanner[0][2]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="box">
                <div className="title">
                  <div className="active">
                    <h3 className="text-success">Total Collection</h3>
                    <p className="fs-20">
                      {activeCollection[0][2] == ""
                        ? 0
                        : activeCollection[0][2]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Sidebar>
  );
};

export default Dashboard;
