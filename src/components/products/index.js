import { useState } from "react";

// Leaderboard
import DisplayLeaderboardData from "../leaderboard/index";
import LeaderboardData from "../data/leaderboards.json";

// Styles
import { Card, Image } from "./Product.styles";

const Products = ({
  id,
  title,
  image,
  type,
  description,
  supported_platforms,
}) => {
  const [show, setShow] = useState(true);
  const [getLeaderboardData, setLeaderboardData] = useState(LeaderboardData);

  const filterLeaderboard = getLeaderboardData.filter(
    (entry) => entry.product_id === id
  );

  return show ? (
    <Card key={id}>
      <Image style={{ backgroundImage: `url('${image}')` }} />
      <div className="cardTextContent">
        <h3>{title}</h3>
        <div className="cardTag">{type}</div>
        <DisplayLeaderboardData getLeaderboardData={filterLeaderboard} />
        <p className="showMoreBtn" onClick={() => setShow(false)}>
          Show more
        </p>
      </div>
    </Card>
  ) : (
    <Card key={id}>
      <Image style={{ backgroundImage: `url('${image}')` }} />
      <div className="cardTextContent">
        <h3>{title}</h3>
        <p className="cardTag">{type}</p>
        <div className="newContent">
          <h4>Description</h4>
          <p>{description}</p>
          <div className="supportedPlatforms">
            <h4>Supported Platforms</h4>
            <p className="supportedPlatformsText">
              {supported_platforms.map((platform, index) => (
                <p key={index}>{platform}</p>
              ))}
            </p>
          </div>
        </div>
        <p className="showMoreBtn" onClick={() => setShow(true)}>
          Show less
        </p>
      </div>
    </Card>
  );
};

export default Products;
