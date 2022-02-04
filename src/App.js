import React, { useState } from "react";
import getProductCategoryData from "./components/data/productcategories.json";

import { ProductCategory } from "./components/styled-components/productContainer/ProductContainer";
import Products from "./components/products";

// Styles
import {
  ProductContainer,
  CardContainer,
} from "./components/styled-components/productContainer/ProductContainer";
// import GetProductData from "./components/getProductData/GetProductData";

//Styles
import { GlobalStyle } from "./components/styled-components/GlobalStyle";

const App = () => {
  const [getProductData, setProductData] = useState(getProductCategoryData);

  return (
    <div className="app">
      <header></header>
      <main>
        {getProductData.map(
          ({
            id: categoryId,
            title: categoryTitle,
            products: productValues,
          }) => (
            <ProductContainer key={categoryId}>
              <ProductCategory title={categoryTitle} />
              <CardContainer>
                {productValues.map(
                  ({
                    id: productId,
                    title: productTitle,
                    image: productImg,
                    type: productType,
                    description: productDescription,
                    supported_platforms: productSupportedPlatforms,
                  }) => (
                    <Products
                      key={productId}
                      title={productTitle}
                      image={productImg}
                      type={productType}
                      description={productDescription}
                      supported_platforms={productSupportedPlatforms}
                    >
                      {productSupportedPlatforms.map((elm) => (
                        <div key={elm} supported_platforms={elm}></div>
                      ))}
                    </Products>
                  )
                )}
              </CardContainer>
            </ProductContainer>
          )
        )}
        {/* <GetProductData getProductData={getProductData} /> */}
        <GlobalStyle />;
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
