// App.js
import React from "react";
import Dashboard from "./component/dashboard";
import Register from "./auth/register";
import Login from "./auth/login";
import { AuthProvider, useAuth } from "./authContext/authContext";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const App = () => {
  const { user, userData } = useAuth();
  console.log(user , userData);
  return (
    <div>
      <Router>
        {!userData && (
          <Routes>
            <Route path="/" element={<Register />} />
          </Routes>
        )}
        {!user && (
          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
        )}
        {userData && user && (
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        )}
      </Router>
    </div>
  );
};

export default App;
