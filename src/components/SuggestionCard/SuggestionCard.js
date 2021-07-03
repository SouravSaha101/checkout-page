import React from "react";
import "./SuggestionCard.css";
import RupeeSymbol from "../Helper/RupeeSymbol";

const cardStyle = {
  width: "14rem",
  marginRight: "3rem",
  marginBottom: "3rem",
};

function SuggestionCard({ data, onAddtoBag }) {
  const addedTobagHandler = (el) => {
    onAddtoBag(JSON.parse(el.target.value));
  };
  return (
    <>
      {data.map((el) => (
        <div className="card" key={el.id} style={cardStyle}>
          <img className="card-img-top" alt="img" src={el.imageUrl} />
          <div className="card-body">
            <h5 className="card-title">{el.name} </h5>
            <p className="card-text">
              <RupeeSymbol />
              {el.price}
            </p>
          </div>
          <button
            className="base-button"
            value={JSON.stringify(el)}
            onClick={addedTobagHandler}
          >
            Add to Bag
          </button>
        </div>
      ))}
    </>
  );
}

export default SuggestionCard;
