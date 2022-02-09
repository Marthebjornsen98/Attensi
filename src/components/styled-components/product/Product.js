import styled from "styled-components";

export const Card = styled.div`
  width: 32%;
  display: flex;
  flex-direction: column;
  border-radius: var(--border-radius);
  background-color: var(--secondary-color);
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);

  .cardTextContent {
    padding: 35px;
  }

  .cardTag {
    width: fit-content;
    margin: 10px 0px 30px 0px;
    opacity: 0.6;
    border-radius: var(--border-radius);
  }

  .showMoreBtn {
    width: fit-content;
    font-weight: var(--semi-bold);
    border-bottom: solid 3px var(--link-color);

    &:hover {
      cursor: pointer;
      font-weight: var(--bold);
    }
  }

  .supportedPlatforms {
    margin: 40px 0px;

    .supportedPlatformsText {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const Image = styled.div`
  width: 100%;
  height: 370px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  border-radius: var(--img-border-radius);
`;
