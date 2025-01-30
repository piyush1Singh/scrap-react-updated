import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Login = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState(0); // 0 for Login, 1 for Register
  const [result, setResult] = useState("");

  useEffect(() => {
    if (localStorage.getItem("Login")) {
      navigate("/");
    }
  }, []);

  const [registerEmailState, setRegisterEmailState] = useState("");
  const [registerPasswordState, setRegisterPasswordState] = useState("");
  const [loginEmailState, setLoginEmailState] = useState("");
  const [loginPasswordState, setLoginPasswordState] = useState("");

  const registerEmail = (e) => setRegisterEmailState(e.target.value);
  const registerPassword = (e) => setRegisterPasswordState(e.target.value);
  const loginEmail = (e) => setLoginEmailState(e.target.value);
  const loginPassword = (e) => setLoginPasswordState(e.target.value);

  const registerLogin = async () => {
    let url = await fetch(
      "http://localhost/Scrap-react/Admin-panel/Api-Calls/Login-Register/register.php",
      {
        method: "POST",
        body: JSON.stringify({
          email: registerEmailState,
          password: registerPasswordState,
        }),
      }
    );
    let data = await url.json();
    setResult(data["status"] ? "Successfully Registered" : "Email or Password Invalid");
  };

  const SubmitLogin = async (e) => {
    e.preventDefault();
    let url = await fetch(
      "http://localhost/Scrap-react/Admin-panel/Api-Calls/Login-Register/login.php",
      {
        method: "POST",
        body: JSON.stringify({
          email: loginEmailState,
          password: loginPasswordState,
        }),
      }
    );
    let data = await url.json();
    if (data["status"]) {
      localStorage.setItem("user_id", data["user_id"]);
      localStorage.setItem("Login", true);
      setResult("Successfully Logged In");
      navigate("/");
    } else {
      setResult("Email or Password Invalid");
    }
  };

  return (
    <div className="container-fluid p-0">
      <Tabs selectedIndex={selectedTab} onSelect={(index) => setSelectedTab(index)}>
        {/* <TabList>
          <Tab>Login</Tab>
          <Tab>Register</Tab>
        </TabList> */}

        {/* Login Panel */}
        <TabPanel>
          <div className="login-card login-dark">
            <div className="row m-0">
              <div className="col-12 p-0">
                <div className="login-main">
                  <form className="theme-form" onSubmit={SubmitLogin}>
                    <h4>Sign in to your account</h4>
                    <p>Enter your email & password to login</p>
                    
                    <div className="form-group">
                      <label className="col-form-label">Email Address</label>
                      <input
                        type="email"
                        placeholder="Enter Email"
                        required
                        className="form-control"
                        onChange={loginEmail}
                      />
                    </div>

                    <div className="form-group">
                      <label className="col-form-label">Password</label>
                      <input
                        type="password"
                        placeholder="Enter Password"
                        required
                        className="form-control"
                        onChange={loginPassword}
                      />
                    </div>

                    <div className="text-end mt-3">
                      <button className="btn btn-primary btn-block w-100" type="submit">
                        Sign in
                      </button>
                    </div>

                    <div className="text-danger">{result}</div>

                    <p className="mt-4 mb-0 text-center">
                      Don't have an account?{" "}
                      <span className="ms-2 text-primary" style={{ cursor: "pointer" }} onClick={() => setSelectedTab(1)}>
                        Create Account
                      </span>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>

        {/* Register Panel */}
        <TabPanel>
          <div className="login-card login-dark">
            <div className="row m-0">
              <div className="col-12 p-0">
                <div className="login-main">
                  <form className="theme-form">
                    <h4>Register</h4>
                    <p>Enter your email & password to sign up</p>

                    <div className="form-group">
                      <label className="col-form-label">Email Address</label>
                      <input
                        type="email"
                        placeholder="Enter Email"
                        required
                        className="form-control"
                        onChange={registerEmail}
                      />
                    </div>

                    <div className="form-group">
                      <label className="col-form-label">Password</label>
                      <input
                        type="password"
                        placeholder="Enter Password"
                        required
                        className="form-control"
                        onChange={registerPassword}
                      />
                    </div>

                    <div className="text-end mt-3">
                      <button className="btn btn-primary btn-block w-100" type="button" onClick={registerLogin}>
                        Register
                      </button>
                    </div>

                    <div className="text-danger">{result}</div>

                    <p className="mt-4 mb-0 text-center">
                      Already have an account?{" "}
                      <span className="ms-2 text-primary" style={{ cursor: "pointer" }} onClick={() => setSelectedTab(0)}>
                        Login
                      </span>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Login;
