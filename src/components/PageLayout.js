import React from "react";

let PageLayout = ({ header, p, footer }) => {
  return (
    <>
      <h1>{header}</h1>
      <p>{p}</p>
      <footer>{footer}</footer>
    </>
  );
};

export default PageLayout;
