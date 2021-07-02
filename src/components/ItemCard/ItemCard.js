import React from "react";
import "./ItemCard.css";
import RupeeSymbol from "../Helper/RupeeSymbol";

function ItemCard({ data }) {
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
                    <div className="price">{el.price}</div>
                  </strong>
                </div>
                <div>
                  Sold by: {el.soldBy}
                  <div className="price-display">
                    <div className="strike">
                      <RupeeSymbol />
                      {el.orgPrice}
                    </div>
                    <div className="discount">{el.discount}% OFF</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ItemCard;
