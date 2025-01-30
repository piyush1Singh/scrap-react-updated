import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { AiFillEdit } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";

const Product = () => {
  const [product, setProduct] = useState([]);
  const [productId, setProductId] = useState();
  const [productName, setProductName] = useState();
  const [productDesc, setProductDesc] = useState();
  const [productImg, setProductImg] = useState();
  const [productPrice, setProductPrice] = useState();
  const [productCategory, setProductCategory] = useState();
  const [rating, setRating] = useState();
  const [user_id, setUser_id] = useState();

  const [fileData, setFileData] = useState("");
  const [fileName, setFileName] = useState("");

  const [category, setCategory] = useState([]);

  const [show, setShow] = useState(false);
  //Bootstrap Modal Show
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showAddProduct, setshowAddProduct] = useState(false);
  //Bootstrap Modal Show
  const handleCloseAddProduct = () => setshowAddProduct(false);
  const handleShowAddProduct = () => setshowAddProduct(true);

  const addProduct = (e) => {
    e.preventDefault();
    handleShowAddProduct();
    setProductId("");
    setProductName("");
    setProductDesc("");
    setProductCategory("");
    setProductImg("");
    setProductPrice("");
    setRating("");
    setUser_id("");
  };
  const handleProductImg = (e) => {
    // setProductImg(e.target.value);
    const file = e.target.files[0];
    let reader = new FileReader();
    reader.onload = () => {
      const imageData = reader.result;
      setFileData(imageData);
      setFileName(file["name"]);
    };
    reader.readAsDataURL(file);
  };

  const addSaveProduct = async (e) => {
    e.preventDefault();
    let url = await fetch(
      "http://localhost/Scrap-react/Admin-panel/Api-Calls/Product/addNewProduct.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productName: productName,
          productDesc: productDesc,
          imageData: fileData,
          file: fileName,
          productPrice: productPrice,
          category: productCategory,
          rating: rating,
          user_id: localStorage.getItem("user_id"),
          status: "1",
        }),
      }
    );
    let data = await url.json();
    handleCloseAddProduct();
    fetchProduct();
    //Setting New Value in  Category
    if (data["status"] == "success") {
      toast.success("Added New Product", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      toast.error("Try Again", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const updateProductStatus = async (e, status, id) => {
    e.preventDefault();
    let url = await fetch(
      "http://localhost/Scrap-react/Admin-panel/Api-Calls/Product/updateProductStatusById.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
          status: status,
        }),
      }
    );
    let data = await url.json();
    fetchProduct();
    if (data["status"] == "success") {
      toast.success("Edited Product Successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      toast.error("Try Again", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const editProduct = async (e, value) => {
    let url = await fetch(
      "http://localhost/Scrap-react/Admin-panel/Api-Calls/Product/fetchproductbyid.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: value,
        }),
      }
    );
    let data = await url.json();
    setProductId(data[0][0]);
    setProductName(data[0][1]);
    setProductDesc(data[0][2]);
    setProductImg(data[0][3]);
    setProductPrice(data[0][4]);
    setProductCategory(data[0][5]);
    setRating(data[0][6]);
    handleShow();
    e.preventDefault();
  };
  const deleteProduct = async (value) => {
    let url = await fetch(
      "http://localhost/Scrap-react/Admin-panel/Api-Calls/Product/deleteProduct.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: value,
        }),
      }
    );
    let data = await url.json();
    fetchProduct();
    if (data["status"] == "success") {
      toast.success("Deleted Product!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      toast.error("Try Again", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };
  const handleProductName = (e) => {
    setProductName(e.target.value);
  };

  const handleProductDesc = (e) => {
    setProductDesc(e.target.value);
  };

  const handlePrice = (e) => {
    setProductPrice(e.target.value);
  };
  const handleCategory = (e) => {
    setProductCategory(e.target.value);
  };
  const handleRating = (e) => {
    setRating(e.target.value);
  };

  const saveEdit = async (e) => {
    e.preventDefault();
    let url = await fetch(
      "http://localhost/Scrap-react/Admin-panel/Api-Calls/Product/updateProduct.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: productId,
          productName: productName,
          productDesc: productDesc,
          productPrice: productPrice,
          // productImg: productImg,
          rating: rating,
          category: productCategory,
          status: 1,
        }),
      }
    );
    let data = await url.json();
    handleClose();
    fetchProduct();
    if (data["status"] == "success") {
      toast.success("Edited Product Successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      toast.error("Try Again", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const fetchProduct = async () => {
    let url =
      "http://localhost/Scrap-react/Admin-panel/Api-Calls/Product/fetchAllproduct.php";
    let data = await fetch(url);
    let response = await data.json();
    if (response["status"] == false) {
      setProduct([]);
    } else {
      setProduct(response);
    }
  };
  const fetchCategroy = async () => {
    let url =
      "http://localhost/Scrap-react/Admin-panel/Api-Calls/Categories/fetchallCategories.php";
    let data = await fetch(url);
    let response = await data.json();
    if (response["status"] == false) {
      setCategory([]);
    } else {
      setCategory(response);
    }
  };
  useEffect(() => {
    fetchProduct();
    fetchCategroy();
  }, []);

  return (
    <Sidebar>
    <div className="page-body">
<div className="container-fluid basic_table">
            <div className="row " style={{justifyContent: 'center'}}>
              <div className="col-sm-9">
                <div className="card" style={{ marginTop: '25px' }}>
                  <div className="card-header d-flex justify-content-between">
                    <h4>List Of Product</h4>

                    <button className="btn btn-primary" onClick={addProduct}>Add Product</button>
                  </div>
                  <div className="table-responsive custom-scrollbar">
                    <table className="table">
                      <thead>
                        <tr className="border-bottom-primary">
                        <th scope="">Id</th>
              <th scope="">Product</th>
              <th scope="">Description</th>
              <th scope="">Image</th>
              <th scope="">price</th>
              <th scope="">category</th>
              <th scope="">rating</th>
              <th scope="">Status</th>
              <th scope="">Action</th>
                        </tr>
                      </thead>
                      <tbody>
            {product.length > 0 ? (
              product?.map((value, key) => (
                <tr key={key}>
                  <th scope="row">{value[0]}</th>
                  <td>{value[1]}</td>
                  <td>{value[2]}</td>
                  <td>
                    <img
                      className="img-50 me-2"
                      src={"src/assets/productImages/" + value[3]}
                    ></img>
                  </td>
                  <td>{value[4]}</td>
                  <td>{value[5]}</td>
                  <td>{value[6]}</td>
                  <td key={value[8]}>
                    {value[8] == 1 ? (
                      <button
                        className="btn btn-success"
                        onClick={(e) => updateProductStatus(e, 0, value[0])}
                      >
                        Active
                      </button>
                    ) : (
                      <button
                        className="btn btn-danger"
                        onClick={(e) => updateProductStatus(e, 1, value[0])}
                      >
                        InActive
                      </button>
                    )}
                  </td>
                  <td className="">

                 
                    <button
                      onClick={(e) => editProduct(e, value[0])}
                      className="m-2 AiFillEdit "
                    >
                      <AiFillEdit />
                    </button>
                    <button
                      className="m-2 BsTrash"
                      onClick={() => deleteProduct(value[0])}
                    >
                      <BsTrash />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="text-center" colSpan={6}>
                  <h3 className="bold text-danger">No Product Found</h3>
                </td>
              </tr>
            )}
          </tbody>




          <Modal show={show} onHide={handleClose} size="lg">
  <Modal.Header closeButton>
    <Modal.Title>Edit Product</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <form>
      <div className="form-group mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          value={productName}
          onChange={handleProductName}
        />
      </div>

      <div className="form-group mb-3">
        <label className="form-label">Description</label>
        <textarea
          className="form-control"
          value={productDesc}
          onChange={handleProductDesc}
          rows="3"
        />
      </div>
{/* 
      <div className="form-group mb-3">
        <label className="form-label">Image </label>
        <input
          type="file"
          className="form-control"
       value={'../assets/s' + productImg}
          placeholder={productImg}
          onChange={handleProductImg}
        />
      </div> */}

      <div className="form-group mb-3">
        <label className="form-label">Price</label>
        <input
          type="number"
          className="form-control"
          value={productPrice}
          onChange={handlePrice}
        />
      </div>

      <div className="form-group mb-3">
        <label className="form-label">Category</label>
        <select
          className="form-control"
          required
          onChange={handleCategory}
        >
          <option value="" disabled selected>
            Select Category
          </option>
          {category?.map((value, key) => (
            <option key={key} value={value[0]}>
              {value[1]}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group mb-3">
        <label className="form-label">Rating</label>
        <input
          type="number"
          className="form-control"
          value={rating}
          onChange={handleRating}
        />
      </div>
    </form>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>
      Close
    </Button>
    <Button variant="primary" onClick={saveEdit}>
      Save Changes
    </Button>
  </Modal.Footer>
</Modal>

<Modal show={showAddProduct} onHide={handleCloseAddProduct} size="lg">
  <Modal.Header closeButton>
    <Modal.Title>Add Product</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <form>
      <div className="form-group mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          value={productName}
          onChange={handleProductName}
        />
      </div>

      <div className="form-group mb-3">
        <label className="form-label">Description</label>
        <textarea
          className="form-control"
          value={productDesc}
          onChange={handleProductDesc}
          rows="3"
        />
      </div>

      <div className="form-group mb-3">
        <label className="form-label">Image</label>
        <input
          type="text"
          className="form-control"
          onChange={handleProductImg}
        />
      </div>

      <div className="form-group mb-3">
        <label className="form-label">Price</label>
        <input
          type="number"
          className="form-control"
          value={productPrice}
          onChange={handlePrice}
        />
      </div>

      <div className="form-group mb-3">
        <label className="form-label">Category</label>
        <select
          className="form-control"
          required
          onChange={handleCategory}
        >
          <option value="" disabled selected>
            Select Category
          </option>
          {category?.map((value, key) => (
            <option key={key} value={value[0]}>
              {value[1]}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group mb-3">
        <label className="form-label">Rating</label>
        <input
          type="number"
          className="form-control"
          value={rating}
          onChange={handleRating}
        />
      </div>

      <div className="form-check form-switch mb-3">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          checked
          value={1}
        />
        <label
          className="form-check-label"
          htmlFor="flexSwitchCheckDefault"
        >
          Status
        </label>
      </div>
    </form>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleCloseAddProduct}>
      Close
    </Button>
    <Button variant="primary" onClick={addSaveProduct}>
      Save Changes
    </Button>
  </Modal.Footer>
</Modal>

</table>
</div>
</div>

    </div>
     
      </div>
      </div>
      </div>
    </Sidebar>
  );
};

export default Product;
