import React from "react";
import "./Pricing.css";
import RupeeSymbol from "../Helper/RupeeSymbol";

function Pricing({ price }) {
  return (
    <div>
      <div className="price-header">
        Price Details ({price.itemCount ? price.itemCount : 1} Item)
      </div>
      <div>
        <div className="price-row">
          Total MRP
          <span className="price-dis">
            <RupeeSymbol /> {price.totalMRP}
          </span>
        </div>
        <div className="price-row">
          Discount on MRP
          <span className="price-dis cut-off">
            <RupeeSymbol /> {price.discount}
          </span>
        </div>
        <div className="price-row">
          Convenience Fee
          {!price.fee ? (
            <>
              <span className="price-dis cut-off">
                <RupeeSymbol /> {price.fee}
              </span>
              FREE
            </>
          ) : (
            <span className="price-dis">
              <RupeeSymbol /> {price.fee}
            </span>
          )}
        </div>
        {price.giftWrap ? (
          <div className="price-row">
            Gift Wrap Charges
            <span className="price-dis gift">
              <RupeeSymbol /> {price.giftWrap}
            </span>
          </div>
        ) : null}
        <hr />
        <div className="price-row-total">
          Total Amount
          <span className="price-total">
            <RupeeSymbol /> {price.amount}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
