import { Col, Row } from "react-bootstrap";
import "./styles.scss";
import game_image from "../../assets/letters-auth.jpg";

const AuthLayout = ({ children }) => {
  return (
    <div className="auth-page">
      <Row className="auth-container bg-violet">
        <Col className="col1" lg={6}>
          {children}
        </Col>
        <Col className="col2">
          <img src={game_image} />
        </Col>
      </Row>
    </div>
  );
};

export default AuthLayout;
