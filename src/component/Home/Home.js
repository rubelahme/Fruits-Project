import React, { useEffect, useState } from "react";
import HomeItem from "../HomeItem/HomeItem";
import "./Home.css";
const Home = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/item")
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);

  return (
    <div>
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
            <div className="col-md-3">
              <HomeItem item={pd}></HomeItem>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
