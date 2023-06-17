import React, { useEffect, useState } from 'react';
import { db, auth } from '../config/Firebase';
import { collection, onSnapshot,query, where } from 'firebase/firestore';

function MyOrders() {
  const [recommendedFoods, setRecommendedFoods] = useState([]);
  const user = auth.currentUser;
  const userId = user ? user.uid : '';

  useEffect(() => {
    const q = query(collection(db, 'recomendados'), where('userId', '==', userId));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const recommendedData = snapshot.docs.map((doc) => doc.data().name);
      setRecommendedFoods(recommendedData);
    });

    return () => unsubscribe();
  }, [userId]);

  
  
  return (
    <div className="myOrders">
      <p>{recommendedFoods.join(', ')}</p>
    </div>
  );
}

export default MyOrders;

