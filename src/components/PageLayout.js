import React from "react";

let PageLayout = (props) => {
  return (
    <>
      <h1>{props.header}</h1>
       <p>{props.p}</p>
       <p>{props.footer}</p>
    </>
  );
};

export default PageLayout;
