import React from "react";
import { useHistory } from "react-router";
import "./HomeItem.css";
const HomeItem = (props) => {
  const { name, price, img } = props.item;
  const history = useHistory();
  const handleMenu = () => {
    history.push(`/item/${name}`);
  };
  return (
    <div className="text-center mt-3 bg-warning">
      <img src={img} alt="" />
      <h5> Fruit :{name}</h5>
      <p>Price: ${price}</p>
      <button className="bg-success mb-2" onClick={handleMenu}>
        Buy Item
      </button>
    </div>
  );
};

export default HomeItem;
