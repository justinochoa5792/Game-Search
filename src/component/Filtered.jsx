import React, { useState, useEffect } from "react";
import List from "./List";
import Axios from "axios";

const Filtered = () => {
  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");

  const getList = async () => {
    const response = await Axios.get(
      "https://www.cheapshark.com/api/1.0/stores"
    );
    console.log(response.data);
    setList(response.data);
  };

  useEffect(() => {
    getList();
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  let filteredList = list.filter((lists) => {
    return lists.storeName.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="filtered">
      <h3>Authorized Sellers</h3>
      <p>Search list to find authorized sellers</p>
      <input
        type="search"
        placeholder="search stores"
        onChange={handleChange}
      />
      <List filteredList={filteredList} />
    </div>
  );
};

export default Filtered;
