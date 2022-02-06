// Styles
import {
  LeaderboardContainer,
  LeaderboardResults,
  RankAndImage,
  Rank,
} from "../styled-components/leaderboard/leaderboard";

const DisplayLeaderboardData = ({ getLeaderboardData }) => {
  return (
    <>
      {getLeaderboardData.map(
        ({
          product_id: leaderboardProduct_id,
          entries: leaderboardEntries,
        }) => (
          <LeaderboardContainer key={leaderboardProduct_id}>
            <h4>Leaderboard</h4>
            {leaderboardEntries.map(
              ({ user_id, username, image, rank, score }) => (
                <LeaderboardResults key={user_id}>
                  <RankAndImage>
                    <Rank>{rank}</Rank>
                    <img src={image} width="50px" height="auto" />
                  </RankAndImage>
                  <p>{username}</p>
                  <p>{score}</p>
                </LeaderboardResults>
              )
            )}
          </LeaderboardContainer>
        )
      )}
    </>
  );
};

export default DisplayLeaderboardData;
