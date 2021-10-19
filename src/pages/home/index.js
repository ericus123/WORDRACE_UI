import "./styles.scss";
import typing_img from "../../assets/typing.png";
import { FaKeyboard } from "react-icons/fa";
import { Row, Col } from "react-bootstrap";
import { animate } from "motion";
import { useEffect } from "react";
import { useHistory } from "react-router";

const HomePage = () => {
  const history = useHistory();
  useEffect(() => {
    animate(
      ".next-btn",
      { rotate: 5, color: "red", fontWeight: "bold" },
      {
        duration: 0.5,
        easing: "ease-in-out",
        repeat: 1000,
        direction: "alternate",
      }
    );
  }, []);
  return (
    <div className="homepage">
      <div className="welcome-box  bd-radius-16 bg-violet">
        <h1 className="text-center txt-fontweight-700 pt-2 txt-green">
          WORD RACE <FaKeyboard size={48} className="keyboard-icon txt-green" />
        </h1>
        <Row>
          <Col className="mt-5">
            <p className="txt-white home-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.{" "}
            </p>
          </Col>
          <Col>
            <img className="welcome-typing-img" src={typing_img} />{" "}
          </Col>
        </Row>
        <Row>
          <Col>
            <button
              className="next-btn bg-green txt-white bd-radius-5 mt-4"
              id="play-btn"
              onClick={() => history.push("/play")}
            >
              Play
            </button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default HomePage;
