import React, { useState, useEffect } from "react";
import Sidebar from "../component/adminSidebar";
import { AiFillEdit } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";

const Category = () => {
  const [category, setCategory] = useState([]);
  const [categoryId, setCategoryId] = useState();
  const [categoryName, setCategoryName] = useState();
  const [categoryDesc, setCategoryDesc] = useState();
  const [categoryImg, setCategoryImg] = useState();
  const [categoryStatus, setCategoryStatus] = useState();

  const [fileImageData, setFileImageData] = useState("");
  const [fileImagename, setFileImageName] = useState("");

  //Modal Show state
  const [show, setShow] = useState(false);
  //Bootstrap Modal Show
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //Modal State Ends
  //Modal Show state
  const [showAddCategory, setShowAddCategory] = useState(false);
  //Bootstrap Modal Show
  const handleCloseAddCategory = () => setShowAddCategory(false);
  const handleShowAddCategory = () => setShowAddCategory(true);
  //Modal State Ends

  const addCategory = async (e) => {
    e.preventDefault();
    setCategoryName("");
    setCategoryDesc("");
    setCategoryImg("");
    setCategoryStatus("");
    handleShowAddCategory();
    localStorage.getItem("user_id");
  };

  // Function To Fetch All Category Start
  const fetchCategory = async () => {
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
  // Function To Fetch All Category End

  // Handle Change the input value Start
  const handleCategoryName = (e) => {
    setCategoryName(e.target.value);
  };

  const handleCategoryDesc = (e) => {
    setCategoryDesc(e.target.value);
  };
  const handleCategoryImg = (e) => {
    // setCategoryImg(e.target.value);
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const imageData = reader.result;
      setFileImageData(imageData);
      setFileImageName(file["name"]);
    };
    reader.readAsDataURL(file);
  };
  // Handle Change the input value End

  // Handle New Category Fields Value End

  const saveAddCategory = async (e) => {
    e.preventDefault();
    let url = await fetch(
      "http://localhost/Scrap-react/Admin-panel/Api-Calls/Categories/addNewCategories.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          category_name: categoryName,
          category_desc: categoryDesc,
          imageDate: fileImageData,
          file: fileImagename,
          user_id: localStorage.getItem("user_id"),
          status: "1",
        }),
      }
    );
    let data = await url.json();
    handleCloseAddCategory();
    fetchCategory();
    //Setting New Value in  Category
    if (data["status"] == "success") {
      toast.success("Added New Category", {
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

  // Edit Category values In modal Start
  const EditCategory = async (e, value) => {
    e.preventDefault();
    //Modal Show
    handleShow();
    let url = await fetch(
      "http://localhost/Scrap-react/Admin-panel/Api-Calls/Categories/fetchcategorybyId.php",
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
    //Setting New Value in  Category
    setCategoryId(data[0][0]);
    setCategoryName(data[0][1]);
    setCategoryDesc(data[0][2]);
    setCategoryImg(data[0][3]);
    setCategoryStatus(data[0][5]);
  };
  // Edit Category values In modal End

  // Update Edited Category To New Values Start
  const saveEditCategory = async (e) => {
    e.preventDefault();
    let url = await fetch(
      "http://localhost/Scrap-react/Admin-panel/Api-Calls/Categories/updateCategory.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: categoryId,
          categoryName: categoryName,
          categoryDesc: categoryDesc,
          // categoryImg: categoryImg,
          status: categoryStatus,
        }),
      }
    );
    let data = await url.json();
    handleClose();
    fetchCategory();
    toast.success("Category Updated Successfully!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  // Update Edited Category To New Values End

  // Delete Category function Start
  const deleteCategory = async (e, value) => {
    e.preventDefault();
    let url = await fetch(
      "http://localhost/Scrap-react/Admin-panel/Api-Calls/Categories/deleteCategory.php",
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
    fetchCategory();
    toast.success("Category Deleted", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  // Delete Category function End

  // To Change Category Status To Active Or InActive Start
  const updateCategoryStatus = async (e, status, id) => {
    e.preventDefault();
    let url = await fetch(
      "http://localhost/Scrap-react/Admin-panel/Api-Calls/Categories/updateCategoryStatusById.php",
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
    fetchCategory();
    if (data["status"] == "success") {
      toast.success("Status Changed", {
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
  // To Change Category Status To Active Or InActive End

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <Sidebar>
   <div className="page-body">
   <div className="container-fluid basic_table">
   <div className="row " style={{justifyContent: 'center'}}>
   <div className="col-sm-9">
   <div className="card" style={{ marginTop: '25px' }}>
   <div className="card-header d-flex justify-content-between">

                    <h4>List Of Category</h4>

                    <button className="btn btn-primary" onClick={addCategory}>Add Category</button>
                  </div>
      
        <div className="table-responsive custom-scrollbar">
        <table className="table">
          <thead>
          <tr className="border-bottom-primary">
              <th scope="">Id</th>
              <th scope="">Category Name</th>
              <th scope="">Description</th>
              <th scope="">Image</th>
              <th scope="">Status</th>
              <th scope="">Action</th>
            </tr>
          </thead>
          <tbody>
            {category.length > 0 ? (
              category?.map((value, key) => (
                <tr>
                  <td>{value[0]}</td>
                  <td>{value[1]}</td>
                  <td>{value[2]}</td>
                  <td>
                    <img
                      className="img-50 me-2"
                      src={"../src/assets/categoriesImages/" + value[3]}
                      alt=""
                    />
                  </td>
                  <td key={value[5]}>
                    {value[5] == 1 ? (
                      <button
                        className="btn btn-success"
                        onClick={(e) => updateCategoryStatus(e, 0, value[0])}
                      >
                        Active
                      </button>
                    ) : (
                      <button
                        className="btn btn-danger"
                        onClick={(e) => updateCategoryStatus(e, 1, value[0])}
                      >
                        InActive
                      </button>
                    )}
                  </td>
                  <td className="">
                    <button
                      className="m-2 AiFillEdit"
                      onClick={(e) => EditCategory(e, value[0])}
                    >
                      <AiFillEdit />
                    </button>
                    <button
                      className="m-2 BsTrash"
                      onClick={(e) => deleteCategory(e, value[0])}
                    >
                      <BsTrash />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="text-center" colSpan={6}>
                  <h3 className="bold text-danger">No data Found</h3>
                </td>
              </tr>
            )}
          </tbody>
        </table>
        </div>
    <Modal show={show} onHide={handleClose} size="lg">
  <Modal.Header closeButton>
    <Modal.Title>Edit Category</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <div className="form-group mb-3">
      <input type="hidden" name="id" value={categoryId} />
      <label className="ps-2">Name</label>
      <input
        type="text"
        value={categoryName}
        className="form-control"
        onChange={handleCategoryName}
        name="categoryName"
      />
    </div>
    <div className="form-group mb-3">
      <label className="ps-2">Description</label>
      <input
        type="text"
        value={categoryDesc}
        className="form-control"
        onChange={handleCategoryDesc}
        name="categoryDesc"
      />
    </div>
    {/* <div className="form-group mb-3">
      <label className="ps-2">Image</label>
      <input
        type="file"
        className="form-control"
        onChange={(e) => handleCategoryImg(e.target.files[0])} // Proper file handling
        name="categoryImg"
      />
    </div> */}
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>
      Close
    </Button>
    <Button variant="primary" onClick={saveEditCategory}>
      Save Changes
    </Button>
  </Modal.Footer>
</Modal>

        <Modal show={showAddCategory} onHide={handleCloseAddCategory}>
          <Modal.Header closeButton>
            <Modal.Title>Add Category</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div className="form-group mb-3">
              <input type="hidden" name="id" />
              <label className="ps-2">Name</label>
              <input
                type=""
                required
                name="id"
                value={categoryName}
                 className="form-control"
                onChange={(e) => handleCategoryName(e)}
              />
            </div>
            <div className="form-group mb-3">
              <label className="ps-2">Description</label>
              <input
                type=""
                required
                name="id"
                value={categoryDesc}
                 className="form-control"
                onChange={(e) => handleCategoryDesc(e)}
              />
            </div>
            <div className="form-group mb-3">
              <label className="ps-2">Image</label>
              <input
                type="file"
                required
                name="id"
                 className="form-control"
                onChange={handleCategoryImg}
              />
            </div>
            <div className="form-check form-switch">
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
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseAddCategory}>
              Close
            </Button>
            <Button variant="primary" onClick={saveAddCategory}>
              Add Category
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      </div>
      </div>
      </div>
      </div>
    </Sidebar>
  );
};

export default Category;
