import React, { useState } from "react";

// Styles
import {
  Card,
  Image,
  CardTextContent,
  CardTag,
  ReadMoreBtn,
  SupportedPlatforms,
} from "../styled-components/productContainer/ProductContainer";

const Products = ({
  id,
  title,
  image,
  type,
  description,
  supported_platforms,
}) => {
  const [show, setShow] = useState(true);

  return show ? (
    <Card key={id} className="card">
      <Image style={{ backgroundImage: `url('${image}')` }} />
      <CardTextContent>
        <h3>{title}</h3>
        <CardTag>{type}</CardTag>
        <ReadMoreBtn onClick={() => setShow(false)}>Read more</ReadMoreBtn>
      </CardTextContent>
    </Card>
  ) : (
    <Card key={id} className="card">
      <Image style={{ backgroundImage: `url('${image}')` }} />
      <CardTextContent>
        <h3>{title}</h3>
        <CardTag>{type}</CardTag>
        <h4>Description</h4>
        <p>{description}</p>
        <SupportedPlatforms>
          <h4>Supported Platforms</h4>
          <p>{supported_platforms}</p>
        </SupportedPlatforms>
        <ReadMoreBtn onClick={() => setShow(true)}>Read less</ReadMoreBtn>
      </CardTextContent>
    </Card>
  );
};

export default Products;
