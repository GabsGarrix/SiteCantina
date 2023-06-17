import React from 'react';
import { Rate, Button, Tooltip } from 'antd';
import ThumbsUpDownIcon from '@mui/icons-material/ThumbsUpDown';
import { db,auth } from '../config/Firebase';
import { collection, addDoc } from 'firebase/firestore';

function AlmocoItem({ image, name, price }) {
  const handleClick = async () => {
    try {
      const user = auth.currentUser;
      if (user) {
        const userId = user.uid;
        await addDoc(collection(db, 'recomendados'), { userId, name });
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="menuItem" onClick={handleClick}>
      <div style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
      <h1>{name}</h1>
      <p>{price}$00</p>
      <Rate count={3} style={{ color: 'green' }} tooltips={['mau', 'normal', 'bom']} />
      <Tooltip title="Hate Us">
        <Button shape="round" style={{ marginLeft: '70px', border: 'none' }}>
          <ThumbsUpDownIcon style={{ color: 'orange' }} />
        </Button>
      </Tooltip>
    </div>
  );
}

export default AlmocoItem;
