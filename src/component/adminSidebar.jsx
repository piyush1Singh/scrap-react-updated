import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ children }) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("Login");
    localStorage.removeItem("user_id");
    navigate("/admin/login");
  };

  useEffect(() => {
    const isLogin = localStorage.getItem("Login");
    if (!isLogin) {
      navigate("/admin/login");
    }
  }, [navigate]);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/admin/">
            Scrap
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/admin/ "
                  end
                  activeClassName="active"
                >
                  Dashboard
                </NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link" to="/admin/product" activeClassName="active">
                  Product
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/admin/category" activeClassName="active">
                  Category
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/admin/banner" activeClassName="active">
                  Banner
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/admin/collection" activeClassName="active">
                  Collection
                </NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <button
                className="btn btn-outline-success"
                type="submit"
                onClick={logout}
              >
                Logout
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div>{children}</div>
    </div>
  );
};

export default Sidebar;
