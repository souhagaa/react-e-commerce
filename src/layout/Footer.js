import React from "react";

const Footer = () => {
  return (
    <div style={footerStyles} className="footer">
      <p>All rights reserved</p>
    </div>
  );
};

const footerStyles = {
  position: "fixed",
  left: 0,
  bottom: 0,
  width: "100%",
  backgroundColor: "#000000",
  color: "white",
  textAlign: "center",
};

export default Footer;
