import React from "react";
import "./SuggestionCard.css";
import RupeeSymbol from "../Helper/RupeeSymbol";

const cardStyle = {
  width: "18rem",
  marginRight: "3rem",
  marginBottom: "3rem",
};

function SuggestionCard({ data }) {
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
        </div>
      ))}
    </>
  );
}

export default SuggestionCard;
