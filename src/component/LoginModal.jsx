import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Tabs, Tab } from "react-bootstrap";

const LoginModal = (props) => {
  const [key, setKey] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [registerMessage, setRegisterMessage] = useState("");
  const [registerClass, setRegisterClass] = useState("");

  const emailHandle = (e) => {
    // Event handler for handling changes in the email input field
    setEmail(e.target.value);
  };

  const passwordHandle = (e) => {
    // Event handler for handling changes in the password input field
    setPassword(e.target.value);
  };

  const login = async (e) => {
    // Asynchronous function to handle the login process
    setLoginError(""); // Clear the login error message
    e.preventDefault(); // Prevent the default form submission behavior

    if (email.length > 0 && password.length > 0) {
      // Check if both email and password have been entered
      let url = await fetch(
        // Send a fetch request to the login API endpoint
        "http://localhost/Scrap-react/Admin-panel/Api-Calls/Login-Register/login.php",
        {
          method: "POST",
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        }
      );
      let data = await url.json(); // Extract the JSON data from the response

      if (data.status == true) {
        // If the login status is true (successful login)
        props.handleClose(); // Close the login modal or perform any necessary action
        localStorage.setItem("login", true); // Store the login status in the local storage
        localStorage.setItem("user_id", data.user_id); // Store the user ID in the local storage
        return;
      } else {
        // If the login status is false (invalid login credentials)
        setLoginError("Please Enter Valid Email And Password"); // Set the login error message
        return;
      }
    } else {
      // If either email or password is empty
      setLoginError("Please Enter Valid Email And Password"); // Set the login error message
      return;
    }
  };

  const register = async (e) => {
    // Asynchronous function to handle the registration process
    setRegisterMessage(""); // Clear the registration message
    e.preventDefault(); // Prevent the default form submission behavior

    if (email.length > 0 && password.length > 0) {
      // Check if both email and password have been entered
      let url = await fetch(
        // Send a fetch request to the registration API endpoint
        "http://localhost/Scrap-react/Admin-panel/Api-Calls/Login-Register/register.php",
        {
          method: "POST",
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        }
      );
      let data = await url.json(); // Extract the JSON data from the response

      if (data.status == true) {
        // If the registration status is true (successful registration)
        setRegisterMessage(
          "User Successfully Registered, Please Login To Proceed"
        ); // Set the registration success message
        setRegisterClass("success"); // Set the CSS class for styling the registration message
        return;
      } else {
        // If the registration status is false (invalid registration data)
        setRegisterMessage("Please Enter Valid Email And Password"); // Set the registration error message
        setRegisterClass("danger"); // Set the CSS class for styling the registration message
        return;
      }
    } else {
      // If either email or password is empty
      setRegisterMessage("Please Enter Valid Email And Password"); // Set the registration error message
      setRegisterClass("danger"); // Set the CSS class for styling the registration message
      return;
    }
  };

  return (
    <Modal
      className="modal-xxl"
      show={props.show}
      onHide={props.handleClose}
      size="xxl"
    >
      <Modal.Body>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
        >
          <Tab eventKey="login" title="Log In">
            <h4 className="fs-34 text-center mb-6">Sign In</h4>
            <p className="text-center fs-16 mb-7">
              Don’t have an account yet?
              <a className="text-secondary border-bottom text-decoration-none">
                Sign up
              </a>
              for free
            </p>
            <h6 className="text-danger">{loginError}</h6>
            <form>
              <input
                name="email"
                type="email"
                className="form-control border-0 mb-3"
                placeholder="Your email"
                required
                onChange={(e) => emailHandle(e)}
              />
              <input
                name="password"
                type="password"
                className="form-control border-0"
                placeholder="Password"
                required
                onChange={(e) => passwordHandle(e)}
              />
              <div className="d-flex align-items-center justify-content-between mt-5 mb-4">
                <a className="text-secondary">Forgot your password?</a>
              </div>
              <button
                type="submit"
                value="Login"
                className="btn btn-secondary btn-block bg-hover-primary border-hover-primary"
                onClick={(e) => login(e)}
              >
                Log In
              </button>
              <div className="border-bottom mt-6"></div>
              <div className="text-center mt-n2 lh-1 mb-4">
                <span className="fs-14 bg-white lh-1 mt-n2 px-4">
                  or Log-in with
                </span>
              </div>
              <div className="d-flex">
                <a className="btn btn-outline-secondary btn-block border-2x border mr-5 border-hover-secondary">
                  <i className="fab fa-facebook-f mr-2"></i>Facebook
                </a>
                <a className="btn btn-outline-secondary btn-block border-2x border mt-0 border-hover-secondary">
                  <i className="fab fa-google mr-2"></i>Google
                </a>
              </div>
            </form>
          </Tab>
          <Tab eventKey="register" title="Register">
            <div
              className="tab-pane fade active show"
              id="nav-register"
              role="tabpanel"
              aria-labelledby="nav-register-tab"
            >
              <h4 className="fs-34 text-center mb-6">Sign Up</h4>
              <p className="text-center fs-16 mb-7">
                Already have an account?
                <a className="text-secondary border-bottom text-decoration-none">
                  Log in
                </a>
              </p>
              <h5 className={`text-${registerClass}`}>{registerMessage}</h5>
              <form>
                <input
                  name="email"
                  type="email"
                  className="form-control border-0 mb-3"
                  placeholder="Your email"
                  required=""
                  onChange={(e) => emailHandle(e)}
                />
                <input
                  name="password"
                  type="password"
                  className="form-control border-0"
                  placeholder="Password"
                  required
                  onChange={(e) => passwordHandle(e)}
                />
                <div className="d-flex align-items-center justify-content-between mt-5 mb-4">
                  <a className="text-secondary">Forgot your password?</a>
                </div>
                <button
                  type="submit"
                  value="Login"
                  className="btn btn-secondary btn-block bg-hover-primary border-hover-primary"
                  onClick={(e) => register(e)}
                >
                  Sign Up
                </button>
                <div className=" mt-6"></div>
              </form>
            </div>
          </Tab>
        </Tabs>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
