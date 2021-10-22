import { Card } from "antd";
import { Col, Row } from "react-bootstrap";
import LeadersTable from "../../components/tables/LeadersTable";
import { medals } from "../../utils/medals";
import data from "../../utils/leaders.json";
import podium_image from "../../assets/podium.png";
import "./styles.scss";
import { FaArrowLeft } from "react-icons/fa";
import { useHistory } from "react-router";

const LeaderBoardPage = () => {
  const history = useHistory();
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
          {[1, 2, 3].map((key) => (
            <Col key={key}>
              <Card
                className="leader-card bd-radius-10 bg-violet"
                hoverable
                style={{ width: 240, height: 300 }}
                cover={
                  <img
                    alt="example"
                    className="leader-avatar"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  />
                }
              >
                <div className="place-icon">
                  <img src={medals[key]} />
                </div>
                <h1 className="leader-name txt-fontfamily-gaming text-center txt-white">
                  Ericus
                </h1>
                <h1 className="leader-score txt-fontfamily-gaming text-center">
                  172
                </h1>
                <h1 className="leader-level txt-fontfamily-gaming text-center">
                  16
                </h1>
              </Card>
            </Col>
          ))}
        </Row>
        <Row className="table-row">
          <LeadersTable data={data} />
        </Row>
      </div>
      <br />
    </div>
  );
};

export default LeaderBoardPage;
