import React, { useEffect, useState } from "react";
import "../assets/App.css";
import Dashboard from "../admin/Dashboard";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function AdminDashboard() {
  // const [sessionValid, setSessionValid] = useState(false);

  // useEffect(() => {
  //   async function checkSession() {
  //     try {
  //       let response = await fetch(
  //         "http://localhost/Scrap-react/Admin-panel/Api-Calls/Login-Register/session.php",
  //         {
  //           method: "GET",
  //           credentials: "include", // Important for session cookies
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //         }
  //       );
    
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }
    
  //       let data = await response.json();
  //       console.log("Session Check Response:", data); // Debugging
    
  //       setSessionValid(data.session);
    
  //       if (!data.session) {
  //         toast.error("Session expired! Redirecting to login...");
  //         setTimeout(() => {
  //           window.location.href = "/admin/login";
  //         }, 2000);
  //       }
  //     } catch (error) {
  //       console.error("Error checking session:", error);
  //       toast.error("Error checking session");
  //     }
  //   }
    

  //   checkSession();
  // }, []);

  return (
    <div className="App">
      {/* {sessionValid ? <Dashboard /> : <p>Checking session...</p>} */}
      <Dashboard />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default AdminDashboard;
