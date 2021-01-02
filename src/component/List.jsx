import React from "react";

const List = (props) => {
  console.log(props);
  let list = props.filteredList.map((filtList) => {
    return (
      <ul>
        <li>
          <strong>Store ID:</strong>
          {filtList.storeID}
        </li>
        <li>
          <strong>Name of Store:</strong>
          {filtList.storeName}
        </li>
      </ul>
    );
  });
  return <div>{list}</div>;
};

export default List;
