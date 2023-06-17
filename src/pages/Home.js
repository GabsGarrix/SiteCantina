import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import canteen from "../assets/canteen.jpeg";

function Home() {
  return (
    <div className="home" style={{ background: `url(${canteen})` }}>
      <div className="headerContainer">
        <h1>UTA's Canteen</h1>
        <p>Come Have your lunch before or after class</p>
        <Link to="/menu">
          <button>GO TO MENU</button>
        </Link>
      </div>
      
    </div>
  );
}

export default Home;
