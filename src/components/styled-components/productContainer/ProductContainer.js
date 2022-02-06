import styled from "styled-components";

export const ProductContainer = styled.div`
  width: 75%;
  margin: auto;
`;

export const ProductCategory = styled.div`
  width: 100%;
  display: flex;
`;

export const CardContainer = styled.div`
  width: 100%;
  margin: 20px 0px 80px 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 25px 20px;
`;

export const Card = styled.div`
  width: 32%;
  display: flex;
  flex-direction: column;
  border-radius: var(--border-radius);
  background-color: var(--secondary-color);
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
`;

export const Image = styled.div`
  width: 100%;
  height: 400px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  border-radius: var(--img-border-radius);
`;

export const CardTextContent = styled.div`
  padding: 35px;
`;

export const CardTag = styled.p`
  width: fit-content;
  margin: 10px 0px 30px 0px;
  opacity: 0.6;
  border-radius: var(--border-radius);
`;

export const SupportedPlatforms = styled.div`
  margin: 40px 0px;
`;

export const SupportedPlatformsText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ShowMoreBtn = styled.p`
  width: fit-content;
  font-weight: var(--semi-bold);
  border-bottom: solid 3px var(--link-color);

  &:hover {
    cursor: pointer;
    font-weight: var(--bold);
  }
`;
