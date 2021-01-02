import React, { useState, useEffect } from "react";
import Axios from "axios";

const Deal = () => {
  const [deal, setDeal] = useState([]);

  const getDeals = async () => {
    const response = await Axios.get(
      "https://www.cheapshark.com/api/1.0/deals?upperPrice=15"
    );
    console.log(response.data);
    setDeal(response.data);
  };

  const renderDeals = () => {
    return deal.map((eachDeal) => {
      return (
        <ul>
          <img src={eachDeal.thumb} alt={eachDeal.title} />
          <li>{eachDeal.title}</li>
          <li style={{ textDecoration: "line-through" }}>
            <strong>Normal Price: </strong>
            {eachDeal.normalPrice}
          </li>
          <li>
            <strong>Sale Price: </strong>
            {eachDeal.salePrice}
          </li>
        </ul>
      );
    });
  };

  useEffect(() => {
    getDeals();
  }, []);

  return (
    <div className="deal">
      <h3>Deals of the Day!</h3>
      {renderDeals()}
    </div>
  );
};

export default Deal;
