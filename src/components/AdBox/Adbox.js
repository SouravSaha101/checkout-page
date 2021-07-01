import React from "react";
import "./Adbox.css";

const boxStyle = {
  padding: "16px",
  borderRadius: "4px",
  border: "1px solid #eaeaec",
  maxWidth: "45rem",
  marginBottom: "10px",
};
const headerStyle = {
  fontWeight: "600",
  marginBottom: "4px",
  lineHeight: "18px",
  color: "#03a685",
};
const headerStyleOffer = {
  fontWeight: "600",
  marginBottom: "4px",
  lineHeight: "18px",
};
const messageStyle = {
  fontWeight: "400",
  marginBottom: "4px",
};

const showMoreStyle = {
  paddingLeft: "17px",
  fontSize: "14px",
  fontWeight: "600",
  textTransform: "capitalize",
  color: "#ff3f6c",
  cursor: "pointer",
  display: "inline-block",
};
function Adbox({ text }) {
  return (
    <div style={boxStyle}>
      <div style={text.isOffer ? headerStyleOffer : headerStyle}>
        {text.header}
      </div>
      <div style={messageStyle}>{text.message}</div>
      {text.isOffer && <div style={showMoreStyle}> Show More</div>}
    </div>
  );
}

export default Adbox;
