import { Card } from "antd";
import { Col, Row } from "react-bootstrap";
import LeadersTable from "../../components/tables/LeadersTable";
import { medals } from "../../utils/medals";
import podium_image from "../../assets/podium.png";
import "./styles.scss";
import { FaArrowLeft } from "react-icons/fa";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { leaderboardRequest } from "../../redux/actions/scores";
import game_img1 from "../../assets/game_img1.jpg";
import game_img2 from "../../assets/game_img2.jpg";
import game_img3 from "../../assets/game_img3.jpg";

const LeaderBoardPage = () => {
  const history = useHistory();
  const { leaders } = useSelector((state) => state.leaderboardReducer);
  const sorted_leaders = leaders?.sort(
    (a, b) => b.scores.scores - a.scores.scores
  );
  const game_images = [game_img1, game_img2, game_img3];
  const first_three = sorted_leaders.slice(0, 3);

  const rest_7 = sorted_leaders.slice(3, leaders.length);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(leaderboardRequest());
  }, []);
  return (
    <div>
      <h1
        className="game-back txt-violet cursor-pointer m-5"
        onClick={() => history.push("/play")}
      >
        <FaArrowLeft /> Back to play
      </h1>
      <div className="leaderboard">
        <div className="leaderboard-header">
          <h1 className="leaderboard-title txt-fontfamily-gaming">
            LEADERBOARD <img src={podium_image} />
          </h1>
        </div>

        <Row className="leaderboard-row">
          {first_three.map((value, key) => (
            <Col key={key}>
              <Card
                className="leader-card bd-radius-10 bg-violet"
                hoverable
                style={{ width: 240, height: 300 }}
                cover={
                  <img
                    alt="example"
                    className="leader-avatar"
                    src={game_images[key]}
                  />
                }
              >
                <div className="place-icon">
                  <img src={medals[key + 1]} />
                </div>
                <h1 className="leader-name txt-fontfamily-gaming text-center txt-white">
                  <span
                    className="txt-white txt-fontfamily-gaming"
                    style={{ fontSize: ".8em" }}
                  >
                    {value.username}
                  </span>
                </h1>
                <h1 className="leader-score txt-fontfamily-gaming text-center">
                  <span
                    className="txt-white txt-fontfamily-gaming"
                    style={{ fontSize: ".8em" }}
                  >
                    Score:
                  </span>
                  {value.scores.scores}
                </h1>
                <h1 className="leader-level txt-fontfamily-gaming text-center">
                  <span
                    className="txt-white txt-fontfamily-gaming"
                    style={{ fontSize: ".8em" }}
                  >
                    Lev:
                  </span>
                  {value.scores.level}
                </h1>
              </Card>
            </Col>
          ))}
        </Row>
        <Row className="table-row">
          <LeadersTable data={rest_7} />
        </Row>
      </div>
      <br />
    </div>
  );
};

export default LeaderBoardPage;
