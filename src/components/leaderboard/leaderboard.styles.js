import styled from "styled-components";

export const LeaderboardContainer = styled.div`
  width: 100%;
  margin-top: 40px;

  .leaderboardWrapper {
    margin: 30px 0px;
  }
`;

export const LeaderboardResults = styled.div`
  width: 100%;
  margin: 20px auto 0px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ isFeatured }) =>
    isFeatured &&
    `
    font-weight: var(--semi-bold);
  `};

  .rankAndImage {
    display: flex;
    align-items: center;
  }

  .rank {
    padding-right: 30px;
  }

  .rank,
  .leaderboardUsername,
  .leaderboardScore {
    margin-top: 0px;
  }
`;

export const Image = styled.img`
  ${({ isFeatured }) =>
    isFeatured &&
    `
    width: 70px;
    border: solid 2px var(--link-color);
    border-radius: 100px;
    padding: 5px;
  `};
`;
