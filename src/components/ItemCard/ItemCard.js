import React from "react";
import "./ItemCard.css";
import RupeeSymbol from "../Helper/RupeeSymbol";
import Dropdown from "../Helper/Dropdown";

const sizeArray = ["S", "M", "L", "XL"];
const quantityArray = Array.from({ length: 10 }, (_, i) => i + 1);

function ItemCard({ data, onCartChange }) {
  const cartChangeHandler = (newData) => {
    let key = Object.keys(newData)[1];
    data.map((el) => {
      if (el.id === newData.id) {
        el[key] = newData[key];
      }
    });
    onCartChange(data);
  };
  return (
    <>
      {data.map((el) => (
        <div className="box" key={el.id}>
          <div className="row">
            <div className="col-lg-2">
              <img className="img-style" alt="img" src={el.imageUrl} />
            </div>
            <div className="col-lg-10">
              <div className="">
                <h5 className="">{el.name} </h5>
                <div>
                  {el.brand}
                  <strong className="price-display">
                    <RupeeSymbol />
                    <div className="price">{+el.qty * el.price}</div>
                  </strong>
                </div>
                <div>
                  Sold by: {el.soldBy}
                  <div className="price-display">
                    <div className="strike">
                      <RupeeSymbol />
                      {+el.qty * el.orgPrice}
                    </div>
                    <div className="discount">{el.discount}% OFF</div>
                  </div>
                </div>
              </div>
              <div className="dropdown-pos">
                <div className="dropdown-dis">
                  Size:{" "}
                  <Dropdown
                    data={sizeArray}
                    value={el.size}
                    id={"size"}
                    itemId={el.id}
                    onChangeDropdown={cartChangeHandler}
                  />
                </div>
                <div className="dropdown-dis">
                  Qty:{" "}
                  <Dropdown
                    data={quantityArray}
                    value={+el.qty}
                    itemId={el.id}
                    id={"qty"}
                    onChangeDropdown={cartChangeHandler}
                  />
                </div>
              </div>
              <div className="itemComponents-base-messageContainer">
                <div className="itemComponents-base-message">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="8"
                    viewBox="0 0 10 8"
                    className="itemComponents-base-checkIcon"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.775.227A.716.716 0 0 0 8.716.24L3.373 6.015a.09.09 0 0 1-.133 0L1.278 3.91a.716.716 0 0 0-1.059-.001.834.834 0 0 0 0 1.127l2.565 2.742c.14.15.33.223.53.223h.004a.71.71 0 0 0 .53-.23l5.939-6.416A.833.833 0 0 0 9.775.227"
                    ></path>
                  </svg>
                  Delivery by
                  <span className="itemComponents-base-highlightedMessage">
                    {el.deliveryDate}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-lg-4">
              <button className="item-button">Remove</button>
            </div>
            <div className="col-lg-1 vl"></div>
            <div className="col-lg-7">
              <button className="item-button">Move to Wishlist</button>
            </div>
          </div>
          <div></div>
        </div>
      ))}
    </>
  );
}

export default ItemCard;
