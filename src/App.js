import React, { useState } from "react";
import logo from "../src/images/attensi.png";

// Styles
import { Header, Nav } from "./components/styled-components/header/Header";

// Products
import DisplayProductData from "./components/displayProductData";
import GetProductCategoryData from "./components/data/productcategories.json";

//Styles
import { GlobalStyle } from "./components/styled-components/GlobalStyle";

const App = () => {
  const [getProductData, setProductData] = useState(GetProductCategoryData);

  return (
    <div className="app">
      <Header>
        <Nav>
          <img src={logo} />
        </Nav>
      </Header>
      <main>
        <DisplayProductData getProductData={getProductData} />
        <GlobalStyle />
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
