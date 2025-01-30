import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './pages/adminDashboard'; 
import UserDashboard from './pages/userDashboard'; 

const App = () => {
  return (
    <Router> {/* Keep Router only in the App component */}
      <Routes>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/user" element={<UserDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
