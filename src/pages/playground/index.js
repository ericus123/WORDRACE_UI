/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import background_music from "../../assets/sounds/background.mp3";
import fail_sound from "../../assets/sounds/fail.mp3";
import level_win_sound from "../../assets/sounds/level_win.wav";
import all_words from "../../utils/words.json";
import { Timer } from "../../components/timer";
import { NotificationManager } from "react-notifications";
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
import { InstructionsModal, SaveScoreModal } from "../../components/modals";
import { useDispatch, useSelector } from "react-redux";
import { authRequest, logoutRequest } from "../../redux/actions/auth";
import { scoreRequest } from "../../redux/actions/scores";

const PlayGround = () => {
  const { user } = useSelector((state) => state.CheckAuthReducer);
  const authIsLoading = useSelector(
    (state) => state.CheckAuthReducer.isLoading
  );
  const scoreIsLoading = useSelector((state) => state.scoreReducer.isLoading);

  let words = [...all_words];
  // eslint-disable-next-line no-unused-vars
  const [count, setCount] = useState(0);
  const [counts, setCounts] = useState(0);

  // eslint-disable-next-line no-unused-vars
  const [level, setLevel] = useState(1);
  const [word, setWord] = useState(words[level - 1][0]);
  const [words_current, setCurrentWords] = useState(
    words[`${level - 1}`].slice(1)
  );
  // eslint-disable-next-line no-unused-vars
  const [done, setDone] = useState("");
  const [score, setScore] = useState(0);
  const [AudioPlay, setAudioPlay] = useState(false);
  const [timer, setTimer] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [time, setTime] = useState({ initialSeconds: 15, initialMinutes: 0 });
  const [isScoreModalVisible, setScoreModalVisible] = useState(false);
  const dispatch = useDispatch();

  // Instructions modal controls

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  useEffect(() => {
    showModal();
    if (user && user.scores) {
      setLevel(user.scores.level);
      setScore(user.scores.scores);
      setCurrentWords(words[`${level - 1}`].slice(1));
      setWord(words[level - 1][0]);
    }
  }, []);
  useEffect(() => {
    if (user && user.scores) {
      setLevel((prev) => user.scores.level);
      setScore((pev) => user.scores.scores);
      setCurrentWords((prev) => words[`${user.scores.level - 1}`].slice(1));
      setWord((prev) => words[user.scores.level - 1][0]);
    }
  }, [authIsLoading, scoreIsLoading]);

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleScoreOk = () => {
    dispatch(scoreRequest({ level: level + 1, scores: score }));
  };

  const handleScoreCancel = () => {
    setScoreModalVisible(false);
    window.location.reload(true);
  };

  useEffect(() => {
    if (!words_current.length && !word.length) {
      level == 3
        ? NotificationManager.success(
            "You have successfuly completed this game :)",
            "Conglatulations"
          )
        : setScoreModalVisible(true);
      setTimer(false);
      win_audio.play();
    } else {
      if (!word?.length) {
        words.shift();
        setCount(0);
        setCounts(0);
        setDone("");
        setCurrentWords(words_current.slice(1));
        setWord(words_current[0]);
      }
    }
  }, [word.length, counts, word, words_current]);

  const fail_audio = document?.querySelector(".fail-sound");
  const win_audio = document?.querySelector(".win-sound");

  const onKeyPress = (button) => {
    !timer ? setTimer(true) : null;
    if (word?.length) {
      if (button == word[0]) {
        if (!word.length) {
          setCount(count + 1);
        } else if (word.length) {
          setDone(`${done}${word[0]}`);
          setWord(word.slice(1, word.length));
          setScore(score + 2);
        }
      } else {
        setScore(score < 1 ? 0 : score - 1);
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
  const history = useHistory();

  useEffect(() => {
    dispatch(authRequest());
  }, []);

  return (
    <div>
      <InstructionsModal
        handleOk={handleOk}
        handleCancel={handleCancel}
        isModalVisible={isModalVisible}
      />
      <SaveScoreModal
        isLoading={scoreIsLoading}
        handleOk={handleScoreOk}
        handleCancel={handleScoreCancel}
        isScoreModalVisible={isScoreModalVisible}
      />
      <h1
        className="game-back txt-violet cursor-pointer m-5"
        onClick={() => history.push("/")}
      >
        <FaArrowLeft /> Back home
      </h1>
      <div className="playground">
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
              <FaUserAlt className="user-icon m-1 bg-violet p-2" />
              <h1 className="auth-user">{user.username}</h1>
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
              timer ? window.location.reload(true) : setTimer(true);
            }}
          >
            {timer ? "RESET" : "START"}
          </button>

          <div>
            <h1 className="timeleft-title">Time Left</h1>
            <h1 className="remaining-time">
              <Timer
                initialSeconds={time.initialSeconds}
                initialMinutes={time.initialMinutes}
                timer={timer}
              />
            </h1>
          </div>
        </div>
        {user && !authIsLoading ? (
          <Row className="playground-stats mb-3">
            <Col className="level">
              <h1 className="text-center txt-white m-1">{level}</h1>
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
        ) : null}

        <audio controls loop className="sound display-none">
          <source src={background_music} type="audio/mp3" />
        </audio>
        <audio controls className="win-sound display-none">
          <source src={level_win_sound} type="audio/wav" />
        </audio>
        <audio className="fail-sound display-none">
          <source src={fail_sound} type="audio/mp3" />
        </audio>

        <div className="words">
          {/* <span className="done-text">{done}{word}</span> */}
          <h1 className="words-h1">
            <span className="done-text"> {done}</span>
            {word}
          </h1>
          {words_current.map((el, key) => (
            <h1 className="words-h1" key={key}>
              {el}
            </h1>
          ))}
        </div>
        <div style={{ width: "80%", margin: "auto" }}>
          <Keyboard
            physicalKeyboardHighlightPress={true}
            physicalKeyboardHighlight={true}
            physicalKeyboardHighlightBgColor="#56008a"
            physicalKeyboardHighlightTextColor="#ffffff"
            onKeyPress={onKeyPress}
            layout={{
              default: [
                "Q W E R T Y U I O P",
                "A S D F G H J K L",
                "Z X C V B N M",
              ],
            }}
            keyboardRef={(r) => (keyboard.current = r)}
          />
        </div>
      </div>
      <br />
    </div>
  );
};

export default PlayGround;
