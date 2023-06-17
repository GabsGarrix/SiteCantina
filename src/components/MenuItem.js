import React from "react";
import { Rate, Button, Tooltip } from "antd";


import ThumbsUpDownIcon from "@mui/icons-material/ThumbsUpDown";

function MenuItem({ image, name, price }) {
  return (
    <div className="menuItem ">
      <div  style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
      
      <h1>{name}</h1>
      <p>{price}$00</p>
      <Rate
      defaultValue={3}
        count={3}
        style={{ color: "green" }}
        tooltips={["mau", "normal", "bom"]}
      />
      <Tooltip title="Hate Us">
        <Button
          shape="round"
          style={{
            marginLeft: "70px",
            border: "none",
          }}
        >
          <ThumbsUpDownIcon style={{ color: 'orange' }} />
        </Button>
      </Tooltip>
    </div>
  );
}

export default MenuItem;
