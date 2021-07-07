import React from "react";

export const Footer = () => {
  let styleFooter= {
    position: "absolut",
    width: "100%",
    top: "100vh"
  }
  return (
    <footer className="bg-dark py-2 text-light" style={styleFooter}>
      <p className="text-center">copyright &copy; Thejaswini</p>
    </footer>
  );
};
