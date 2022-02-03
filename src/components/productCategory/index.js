import React from "react";

const ProductCategory = ({ id, title }) => {
  return (
    <div key={id}>
      <h2>{title}</h2>
    </div>
  );
};

export default ProductCategory;
