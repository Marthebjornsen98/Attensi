import leaderboardData from "../../components/data/leaderboards.json";

const Leaderboard = () => {
  return (
    <>
      {leaderboardData.map(
        ({
          category: leaderboardCategory,
          product_id: leaderboardProduct_id,
          entries: leaderboardEntries,
        }) => {
          <div>
            <h2>{leaderboardCategory}</h2>
            <p>{leaderboardProduct_id}</p>
          </div>;
        }
        // {leaderboardEntries.map(({ username, image, rank, score }) => {})}
      )}
    </>
  );
};

export default Leaderboard;
