// import React from "react";
// import { ProductCategory } from "../styled-components/productContainer/ProductContainer";
// import Products from "../products";

// // Styles
// import {
//   ProductContainer,
//   CardContainer,
// } from "../styled-components/productContainer/ProductContainer";

// const GetProductData = ({ getProductData }) => {
//   return (
//     <>
//       {getProductData.map(
//         ({ id: categoryId, title: categoryTitle, products: productValues }) => (
//           <ProductContainer key={categoryId}>
//             <ProductCategory title={categoryTitle} />
//             <CardContainer>
//               {productValues.map(
//                 ({
//                   id: productId,
//                   title: productTitle,
//                   image: productImg,
//                   type: productType,
//                   description: productDescription,
//                   supported_platforms: productSupportedPlatforms,
//                 }) => (
//                   <Products
//                     key={productId}
//                     title={productTitle}
//                     image={productImg}
//                     type={productType}
//                     description={productDescription}
//                     supported_platforms={productSupportedPlatforms}
//                   >
//                     {productSupportedPlatforms.map((elm) => (
//                       <div key={elm} supported_platforms={elm}></div>
//                     ))}
//                   </Products>
//                 )
//               )}
//             </CardContainer>
//           </ProductContainer>
//         )
//       )}
//     </>
//   );
// };

// export default GetProductData;
