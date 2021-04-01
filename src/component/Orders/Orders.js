import React, { useContext, useEffect, useState } from "react";
import { createProvider } from "../../App";
import AllOrders from "../AllOrders/AllOrders";

const Orders = () => {
  const [user, setUser] = useContext(createProvider);
  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:4000/orders?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  }, [user.email]);
  console.log(item, setUser);
  return (
    <div>
      <h1 className="text-center">Total Orders :{item.length}</h1>
      <div className="container">
        <div className="row">
          {item.length === 0 && (
            <div className="col-md-12">
              <div className="spinner">
                <div className="spinner-border text-danger" role="status"></div>
              </div>
            </div>
          )}
          {item.map((pd) => (
            <div className="col-md-4">
              <AllOrders item={pd}></AllOrders>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;
