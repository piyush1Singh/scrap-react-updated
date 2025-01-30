import React from "react";
import axios from "axios";

const incrementCart = (productId) => {
  console.log(productId, "prodiuctid");
  axios
    .post(
      "http://localhost/Scrap-react/Admin-panel/Api-Calls/Cart/incrementQuantitybyId.php",
      {
        id: productId,
      },
      {
        withCredentials: true, // enable cookies/session support
      }
    )
    .then((response) => {
      // handle the response here
      console.log(response.data);
    })
    .catch((error) => {
      // handle the error here
      console.error(error);
    });
  return true;
};

export default incrementCart;
