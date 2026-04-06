import React from "react";
import "./../styles/App.css";
import PageLayout from "./PageLayout";

const App = () => {
  return (
    <div>
      <PageLayout
        header="Welcome to My Page."
        p="This is the content of my wesite."
        footer="&copy; 2023 My Website. All rights reserved."
      />
    </div>
  );
};

export default App;
