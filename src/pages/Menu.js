import React, { useEffect, useState } from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import { useNavigate } from "react-router-dom";

import "../styles/Menu.css";
import { db } from "../config/Firebase";
import { getDocs, collection } from "firebase/firestore";

function Menu() {
  const [foodsList, setFoodsList] = useState([]);
  const foodCollectionRef = collection(db, "MenuList");

  useEffect(() => {
    const getFoodList = async () => {
      try {
        const data = await getDocs(foodCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        //console.log(filteredData);
        setFoodsList(filteredData);
      } catch (err) {
        console.error(err);
      }
    };
    getFoodList();
  }, [foodCollectionRef]);

  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the desired route
    navigate("/lunches");
  };

  const handleMenuItemClick = () => {
    // Open the MyOrders component
    navigate("/myorders");
  };

  return (
    <div className="menu">
      <h1 className="menuTitle">Nos Menu</h1>
      <button className="button" onClick={handleClick}>
        Ver Almocos disponiveis
      </button>
      <div className="menuList">
        {foodsList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
              onClick={handleMenuItemClick} 
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
