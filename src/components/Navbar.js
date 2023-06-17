import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";

function Navbar() {
  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  const [openLinks, setOpenLinks] = useState(false);
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <Link to="/">
          <img src={logo} />
        </Link>
        <div className="hiddenLinks">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/lunches">Almoços</Link>
          <Link to="/myorders">MyOrders</Link>
          <Link to="/crud">Crud</Link>
          
          <Link to="/login" className="loginButton">
          LOGIN
        </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/lunches">Almoços</Link>
        <Link to="/myorders">MyOrders</Link>
        <Link to="/crud">Crud</Link>
        <Link to="/login" className="loginButton">
          LOGIN
        </Link>

        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;