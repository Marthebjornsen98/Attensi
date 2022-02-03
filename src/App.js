import React, { useState } from "react";
import getProductCategoryData from "./components/data/productcategories.json";
import ProductCategory from "./components/productCategory";
import Products from "./components/products";

// Styles
import { GlobalStyle } from "./components/styled-components/GlobalStyle";
import {
  ProductContainer,
  CardContainer,
} from "./components/styled-components/productContainer/ProductContainer";

const App = () => {
  const [getProductData, setProductData] = useState(getProductCategoryData);
  console.log(getProductCategoryData);

  return (
    <div className="app">
      {getProductData.map((product) => (
        <ProductContainer>
          <ProductCategory key={product.id} title={product.title} />
          <CardContainer>
            {product.products.map(({ id, title, image, type }) => (
              <Products key={id} title={title} image={image} type={type} />
            ))}
          </CardContainer>
        </ProductContainer>
      ))}
      <GlobalStyle />;
    </div>
  );
};

export default App;
