import React from "react";
import "./Sidebar.css";
import Offersbox from "../OffersBox/Offersbox";
import Pricing from "../Pricing/Pricing";
const Sidebar = (props) => {
  const giftClicked = (data) => {
    props.giftFee(data);
  };
  return (
    <div className="sidebar">
      <Offersbox header="OFFERS & COUPONS" message="1 Offer On Your Bag" />
      <Offersbox
        header="GIFTING & PERSONALISATION"
        message="Gift wrap and personalised message on card, Only for 25"
        isGift
        giftClick={giftClicked}
        fee={props.price}
      />

      <Pricing price={props.price} />
      <br />
      {!props.price.Fee && (
        <>
          <Offersbox
            message="Yay! No Convinence fee on this order"
            isGift
            isFee
          />
          <br />
        </>
      )}
      <button className="order-button"> Place Order</button>
    </div>
  );
};

export default Sidebar;
