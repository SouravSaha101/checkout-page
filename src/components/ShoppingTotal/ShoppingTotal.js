import React from "react";
import RupeeSymbol from "../Helper/RupeeSymbol";

function ShoppingTotal(props) {
  return (
    <div className="itemBlock-base-itemHeader">
      <div>My Shopping Bag ({props.itemCount} Item)</div>
      <div className="itemBlock-base-totalCartValue">
        Total:
        <RupeeSymbol />
        {props.totalPrice}
      </div>
    </div>
  );
}

export default ShoppingTotal;
