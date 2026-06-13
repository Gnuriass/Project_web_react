import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Welcome from "./pages/Login";
import Home from "./pages/Home";
import BookDetails from "./pages/BookDetails";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Category from "./pages/Category";
import Navbar from "./components/Navbar"; // Navbar
import UserContext from "./context/UserContext"; // Context
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard"
import "bootstrap/dist/css/bootstrap.min.css";

function Layout() {
  const location = useLocation(); 
  const hideNavbar = ["/", "/signup", "/login"].includes(location.pathname); 

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Welcome />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/category/:type" element={<Category />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

function App() {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <Layout />
      </Router>
    </UserContext.Provider>
  );
}

export default App;
