import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/Firebase";
import canteen from "../assets/canteen.jpeg";
import "../styles/AddFood.css";

function AddFood() {
  const [newFoodName, setNewFoodName] = useState("");
  const [newFoodPrice, setNewFoodPrice] = useState(0);
  const [newAlmocoName, setNewAlmocoName] = useState("");
  const [newAlmocoPrice, setNewAlmocoPrice] = useState(0);
  const [showPermissionMessage, setShowPermissionMessage] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const foodCollectionRef = collection(db, "MenuList");
  const food2CollectionRef = collection(db, "Almocos");

  const onSubmitFood = async () => {
    try {
      await addDoc(foodCollectionRef, {
        name: newFoodName,
        price: newFoodPrice,
      });
      setShowSuccessMessage(true);
    } catch (err) {
      console.error(err);
      setShowPermissionMessage(true);
    }
  };

  const onSubmitAlmoco = async () => {
    try {
      await addDoc(food2CollectionRef, {
        name: newAlmocoName,
        price: newAlmocoPrice,
      });
      setShowSuccessMessage(true);
    } catch (err) {
      console.error(err);
      setShowPermissionMessage(true);
    }
  };

  return (
    <div className="home" style={{ background: `url(${canteen})` }}>
      {showPermissionMessage && (
        <div className="popup error">
          <p style={{ background: "white"}}>Sorry, you don't have permission to write to the database.</p>
        </div>
      )}

      {showSuccessMessage && (
        <div className="popup success">
          <p style={{ color: "white" }}>Added successfully!</p>
        </div>
      )}

      <input
        placeholder="nome do produto.."
        onChange={(e) => {
          setNewFoodName(e.target.value);
        }}
      />
      <input
        placeholder="preco do produto.."
        type="number"
        onChange={(e) => {
          setNewFoodPrice(Number(e.target.value));
        }}
      />
      <button className="addBtn" onClick={onSubmitFood}>
        adicionar produto
      </button>

      <input
        placeholder="nome do almoco.."
        onChange={(e) => {
          setNewAlmocoName(e.target.value);
        }}
      />
      <input
        placeholder="preco do Almoco.."
        type="number"
        onChange={(e) => {
          setNewAlmocoPrice(Number(e.target.value));
        }}
      />
      <button className="addBtn" onClick={onSubmitAlmoco}>
        adicionar Almoco
      </button>
    </div>
  );
}

export default AddFood;
