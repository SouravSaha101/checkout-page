import React from "react";

function Dropdown({ data, value, id, onChangeDropdown, itemId }) {
  const changeHandler = (e) => {
    onChangeDropdown({ id: itemId, [id]: e.target.value });
  };
  return (
    <select value={value} onChange={changeHandler}>
      {data.map((el) => (
        <option key={el}> {el}</option>
      ))}
    </select>
  );
}

export default Dropdown;
