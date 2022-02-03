import React from "react";
import {
  Card,
  CardTextContent,
  CardTag,
} from "../styled-components/productContainer/ProductContainer";

const Products = ({ id, title, image, type }) => {
  return (
    <Card key={id}>
      <img src={image} />
      <CardTextContent>
        <h3>{title}</h3>
        <CardTag>{type}</CardTag>
      </CardTextContent>
    </Card>
  );
};

export default Products;
