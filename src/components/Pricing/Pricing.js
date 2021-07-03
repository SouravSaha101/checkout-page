import React from "react";
import "./Pricing.css";
import RupeeSymbol from "../Helper/RupeeSymbol";

function Pricing(props) {
  return (
    <div>
      <div className="price-header">
        Price Details ({props.itemCount ? props.itemCount : 1} Item)
      </div>
      <div>
        <div className="price-row">
          Total MRP
          <span className="price-dis">
            <RupeeSymbol /> {props.MRP}
          </span>
        </div>
        <div className="price-row">
          Discount on MRP
          <span className="price-dis cut-off">
            <RupeeSymbol /> {props.MRP}
          </span>
        </div>
        <div className="price-row">
          Convenience Fee
          {!props.isFee ? (
            <>
              <span className="price-dis cut-off">
                <RupeeSymbol /> {props.Fee}
              </span>
              FREE
            </>
          ) : (
            <span className="price-dis">
              <RupeeSymbol /> {props.Fee}
            </span>
          )}
        </div>
        {props?.price?.giftWrap ? (
          <div className="price-row">
            Gift Wrap Charges
            <span className="price-dis gift">
              <RupeeSymbol /> {props.giftWrap}
            </span>
          </div>
        ) : null}
        <hr />
        <div className="price-row-total">
          Total Amount
          <span className="price-total">
            <RupeeSymbol /> {props.amount}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
