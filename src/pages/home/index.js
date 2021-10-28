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
              <b className="txt-fontweight-500">Word Race</b> is a game designed
              to improve QWERTY typing rate and efficiency. Words appear one by
              one at a rate that goes up as time progresses. There’s a limited
              <b className="txt-fontweight-500"> “stack space”</b> that fills up
              after a certain amount of words have appeared. Once a player types
              a word correctly, that word is removed from the stack.
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
