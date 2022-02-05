import React, { useState } from "react";
import getProductCategoryData from "./components/data/productcategories.json";
import DisplayProductData from "./components/getProductData/DisplayProductData";

//Styles
import { GlobalStyle } from "./components/styled-components/GlobalStyle";

const App = () => {
  const [getProductData, setProductData] = useState(getProductCategoryData);

  return (
    <div className="app">
      <header></header>
      <main>
        <DisplayProductData getProductData={getProductData} />
        <GlobalStyle />
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
