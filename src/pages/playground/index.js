import { useEffect, useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import background_music from "../../assets/sounds/background.mp3";
import fail_sound from "../../assets/sounds/fail.mp3";
import level_win_sound from "../../assets/sounds/level_win.wav";
import words from "../../utils/words.json";
import { Timer } from "../../components/timer";

import {
  FaVolumeMute,
  FaVolumeUp,
  FaPowerOff,
  FaUserAlt,
  FaAward,
  FaArrowLeft,
} from "react-icons/fa";

import "./styles.scss";
import { useHistory } from "react-router";
import { gameSaveConfirm } from "../../components/modals";
import { useDispatch, useSelector } from "react-redux";
import { authRequest, logoutRequest } from "../../redux/actions/auth";

const PlayGround = () => {
  // eslint-disable-next-line no-unused-vars
  const [count, setCount] = useState(0);
  const [counts, setCounts] = useState(0);
  const [word, setWord] = useState(words["level1"][`${count}`]);
  // eslint-disable-next-line no-unused-vars
  const [levelLength, setLevelLength] = useState(words["level1"].length);
  const [done, setDone] = useState("");
  const [score, setScore] = useState(0);
  const [AudioPlay, setAudioPlay] = useState(false);
  const [layoutName, setLayoutName] = useState("default");
  const [timer, setTimer] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [time, setTime] = useState({ initialSeconds: 60, initialMinutes: 0 });
  const [currentTime, setCurrentTime] = useState(null);

  const difference = time.minutes * 60 + time.seconds - currentTime;

  const { user } = useSelector((state) => state.CheckAuthReducer);
  const dispatch = useDispatch();

  const onChange = (input) => {
    console.log("Input changed", input);
  };
  useEffect(() => {}, [timer]);
  useEffect(() => {
    if (counts == levelLength && timer) {
      win_audio.play();
      setTimeout(() => {
        alert(difference);
        gameSaveConfirm();
        setTimer(false);
      }, 500);
    }
    if (!word?.length && counts !== levelLength) {
      setCount(count + 1);
      setWord(words["level1"][`${count + 1}`]);
      setDone("");
      setCounts(counts + 1);
    }
  }, [word?.length, counts]);

  const fail_audio = document?.querySelector(".fail-sound");
  const win_audio = document?.querySelector(".win-sound");
  const onKeyPress = (button) => {
    console.log("Button pressed", button);
    if (button === "{shift}" || button === "{caps}") handleShift();
    if (word?.length) {
      if (button == word[0] && counts !== levelLength) {
        if (!word.length) {
          setCount(count + 1);
        }
        setDone(`${done}${word[0]}`);
        setWord(word.slice(1, word.length));
        setScore(score + 2);
      } else {
        fail_audio?.play();
      }
    }
  };

  const handlePlaySound = (type) => {
    const sound = document?.querySelector(".sound");
    type === "play" ? sound.play() : sound.pause();
  };

  const handleAudioPlay = () => {
    setAudioPlay(!AudioPlay);
    handlePlaySound(AudioPlay ? "stop" : "play");
  };

  const keyboard = useRef();
  const handleShift = () => {
    const newLayoutName = layoutName === "default" ? "shift" : "default";
    console.log("yay");
    setLayoutName(newLayoutName);
  };

  const handleCurrentTime = (current) => {
    setCurrentTime(current);
  };
  const history = useHistory();

  useEffect(() => {
    dispatch(authRequest());
  }, []);

  return (
    <div>
      <h1
        className="game-back txt-violet cursor-pointer m-5"
        onClick={() => history.push("/")}
      >
        <FaArrowLeft /> Back home
      </h1>
      <div className="playground bg-violet">
        <div className="playground-header">
          <h2
            className="lead-title"
            onClick={() => history.push("/leaderboard")}
          >
            Leaderboard <FaAward />
          </h2>
          {user ? (
            <>
              {" "}
              <FaUserAlt className="user-icon m-1" />
              <h1 className=" auth-user txt-white m-1">{user.username}</h1>
              <FaPowerOff
                className="logout-btn"
                title="Logout"
                onClick={() => {
                  dispatch(logoutRequest());
                }}
              />
            </>
          ) : null}
        </div>
        <h1 className="txt-green text-center txt-fontweight-700">WORD RACE</h1>
        <div className="game-controls m-2">
          {!AudioPlay ? (
            <FaVolumeMute
              onClick={handleAudioPlay}
              title="Unmute"
              className="sound-icon"
            />
          ) : (
            <FaVolumeUp
              onClick={handleAudioPlay}
              title="Mute"
              className="sound-icon"
            />
          )}
          <button
            className="start-button"
            onClick={() => {
              timer ? window.location.reload() : setTimer(true);
            }}
          >
            {timer ? "RESET" : "START"}
          </button>

          <div>
            <h1 className="timeleft-title">Time Left</h1>
            <h1 className="remaining-time">
              <Timer
                handleCurrentTime={handleCurrentTime}
                initialSeconds={time.initialSeconds}
                initialMinutes={time.initialMinutes}
                timer={timer}
              />
            </h1>
          </div>
        </div>
        <Row className="playground-stats mb-3">
          <Col className="level">
            <h1 className="text-center txt-white m-1">1</h1>
            <p className="text-center txt-white">Level</p>
          </Col>
          <Col className="score">
            <h1 className="text-center txt-white m-1">{score}</h1>
            <p className="text-center txt-white">Score</p>
          </Col>
          <Col className="speed">
            <h1 className="text-center txt-white m-1">4X</h1>
          </Col>
        </Row>
        <audio controls loop className="sound display-none">
          <source src={background_music} type="audio/mp3" />
        </audio>
        <audio controls className="win-sound display-none">
          <source src={level_win_sound} type="audio/wav" />
        </audio>
        <audio className="fail-sound display-none">
          <source src={fail_sound} type="audio/mp3" />
        </audio>

        {timer ? (
          <h1 className="words-wrapper">
            <span className="done-text">{done}</span>
            {word}
          </h1>
        ) : null}
        <Keyboard
          physicalKeyboardHighlightPress={true}
          physicalKeyboardHighlight={true}
          physicalKeyboardHighlightBgColor="#56008a"
          physicalKeyboardHighlightTextColor="#ffffff"
          onChange={onChange}
          onKeyPress={onKeyPress}
          layoutName={layoutName}
          keyboardRef={(r) => (keyboard.current = r)}
        />
      </div>
      <br />
    </div>
  );
};

export default PlayGround;
