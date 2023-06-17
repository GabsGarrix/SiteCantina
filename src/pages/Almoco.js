import React, { useEffect, useState, useMemo } from 'react';
import AlmocoItem from '../components/AlmocoItem';
import '../styles/Menu.css';
import { db,auth } from '../config/Firebase';
import { getDocs, collection } from 'firebase/firestore';

function Almoco() {
  const [almocoList, setAlmocoList] = useState([]);
  const user = auth.currentUser;
  const userId = user ? user.uid : '';
  const almocoCollectionRef = collection(db, 'Almocos');

  useEffect(() => {
    const getFoodList = async () => {
      try {
        const data = await getDocs(almocoCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setAlmocoList(filteredData);
      } catch (err) {
        console.error(err);
      }
    };
    getFoodList();
  }, []);

  const filteredAlmocoList = useMemo(() => {
    return almocoList.filter((almocoItem) => {
      return almocoItem.recommendedBy === userId;
    });
  }, [almocoList, userId]);
  return (
    <div className="menu">
      <h1 className="menuTitle">Nos Almoç</h1>
      <div className="menuList">
        {almocoList.map((almocoItem, key) => {
          return (
            <AlmocoItem
              key={key}
              image={almocoItem.image}
              name={almocoItem.name}
              price={almocoItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Almoco;
