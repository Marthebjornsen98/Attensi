import Products from "../products";

// Styles
import {
  ProductContainer,
  CardContainer,
  ProductCategory,
} from "./DisplayProduct.styles.";

const DisplayProductData = ({ getProductData }) => {
  return (
    <>
      {getProductData.map(
        ({ id: categoryId, title: categoryTitle, products: productValues }) => (
          <ProductContainer key={categoryId}>
            <ProductCategory>
              <h1>{categoryTitle}</h1>
            </ProductCategory>
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
                    id={productId}
                    title={productTitle}
                    image={productImg}
                    type={productType}
                    description={productDescription}
                    supported_platforms={productSupportedPlatforms}
                  />
                )
              )}
            </CardContainer>
          </ProductContainer>
        )
      )}
    </>
  );
};

export default DisplayProductData;
