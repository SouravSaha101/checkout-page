import React from "react";

function Dropdown({ data, value, id, onChangeDropdown }) {
  const changeHandler = (e) => {
    console.log("Hi", data);
    onChangeDropdown({ [id]: e.target.value });
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
