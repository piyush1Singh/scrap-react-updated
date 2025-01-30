import React, { useState, useEffect } from "react";

const Collection = () => {
  const [collection, setCollection] = useState();

  const fetchCollection = async () => {
    // Send a fetch request to the specified URL
    let url = await fetch(
      "http://localhost/Scrap-react/Admin-panel/Api-Calls/Featured-collection/fetchallCollection.php"
    );

    // Extract the JSON data from the response
    let data = await url.json();

    // Update the `collection` state with the retrieved data
    setCollection(data);
  };

  useEffect(() => {
    // Call the `fetchCollection` function when the component mounts
    fetchCollection();
  }, []);

  return (
    <div>
      <section className="py-lg-13 py-11" data-animated-id="3">
        <div className="container container-xl text-center">
          <div
            className="fs-15 font-weight-600 text-uppercase letter-spacing-01 text-secondary mb-4 fadeInUp animated"
            data-animate="fadeInUp"
          ></div>
          <h2
            className="mw-675 mx-auto mb-4 fadeInUp animated"
            data-animate="fadeInUp"
          >
            Featured Collection
          </h2>
          <p className="fs-15 font-weight-600 text-uppercase letter-spacing-01 text-secondary mb-7">
            Let's Take a Glimpse of our trending collections before diving in!
          </p>
          <div className="row">
            {collection?.map((value, key) => (
              <div className="col-lg-3 col-md-6" key={key}>
                <div
                  className="card border-0 mb-lg-0 mb-6 fadeInUp animated"
                  data-animate="fadeInUp"
                >
                  <a className="hover-zoom-in hover-shine">
                    <img
                      src={`Admin-panel/Dashboard-admin/src/assets/collectionImages/${value[2]}`}
                      alt="Bodycare"
                    />
                  </a>
                  <div className="card-body text-center">
                    <h4 className="card-title mb-1">
                      <a>{value[1]}</a>
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Collection;
