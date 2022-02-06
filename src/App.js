import React, { useState } from "react";

// Products
import DisplayProductData from "./components/getProductData/DisplayProductData";
import GetProductCategoryData from "./components/data/productcategories.json";

//Styles
import { GlobalStyle } from "./components/styled-components/GlobalStyle";

const App = () => {
  const [getProductData, setProductData] = useState(GetProductCategoryData);

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
