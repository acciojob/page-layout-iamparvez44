import React from "react";

let PageLayout = (props) => {
  return (
    <>
      <h1>{props.header}</h1>
       <p>{props.p}</p>
       <footer>{props.footer}</footer>
    </>
  );
};

export default PageLayout;
