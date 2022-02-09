// Styles
import {
  LeaderboardContainer,
  LeaderboardResults,
  Image,
} from "./leaderboard.styles";

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
            <div className="leaderboardWrapper">
              {leaderboardEntries
                .slice(0, 5)
                .map(({ user_id, username, image, rank, score }, index) => (
                  <LeaderboardResults key={user_id} isFeatured={index < 3}>
                    <div className="rankAndImage">
                      <p className="rank">{rank}</p>
                      <Image
                        src={image}
                        className="leaderBoardImg"
                        width={50}
                        height={"auto"}
                        isFeatured={index < 3}
                      />
                    </div>
                    <p className="leaderboardUsername">{username}</p>
                    <p className="leaderboardScore">{score}</p>
                  </LeaderboardResults>
                ))}
            </div>
          </LeaderboardContainer>
        )
      )}
    </>
  );
};

export default DisplayLeaderboardData;
