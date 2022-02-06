import { useState } from "react";

// Leaderboard
import DisplayLeaderboardData from "../leaderboard/index";
import LeaderboardData from "../data/leaderboards.json";

// Styles
import {
  Card,
  Image,
  CardTextContent,
  CardTag,
  ShowMoreBtn,
  SupportedPlatforms,
  SupportedPlatformsText,
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
  const [getLeaderboardData, setLeaderboardData] = useState(LeaderboardData);

  return show ? (
    <Card key={id} className="card">
      <Image style={{ backgroundImage: `url('${image}')` }} />
      <CardTextContent>
        <h3>{title}</h3>
        <CardTag>{type}</CardTag>
        <DisplayLeaderboardData getLeaderboardData={getLeaderboardData} />
        <ShowMoreBtn onClick={() => setShow(false)}>Show more</ShowMoreBtn>
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
          <SupportedPlatformsText>
            {supported_platforms.map((platform, index) => (
              <p key={index}>{platform}</p>
            ))}
          </SupportedPlatformsText>
        </SupportedPlatforms>
        <ShowMoreBtn onClick={() => setShow(true)}>Show less</ShowMoreBtn>
      </CardTextContent>
    </Card>
  );
};

export default Products;
