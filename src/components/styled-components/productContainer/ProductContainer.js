import styled from "styled-components";

export const ProductContainer = styled.div`
  width: 75%;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

export const ProductCategory = styled.div`
  display: flex;
  width: 100%;
`;

export const CardContainer = styled.div`
  width: 100%;
  margin: 20px 0px 80px 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 25px;
`;

export const Card = styled.div`
  width: 32%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 30px 30px 10px 10px;
  background-color: white;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
`;

export const CardTextContent = styled.div`
  padding: 35px;
`;

export const CardTag = styled.div`
  background-color: rgba(57, 188, 203, 0.2);
  padding: 5px 20px;
  border-radius: 5px;
  width: fit-content;
`;
