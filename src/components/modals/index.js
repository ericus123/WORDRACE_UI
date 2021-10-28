import { Modal } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import "./styles.scss";
import { SimpleSpinner } from "../loaders";

export const InstructionsModal = ({
  handleOk,
  handleCancel,
  isModalVisible,
}) => {
  return (
    <>
      <Modal
        closable={false}
        maskClosable={false}
        title={
          <h1 className="instructions-title txt-violet txt-fontweight-700">
            INSTRUCTIONS
          </h1>
        }
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={
          <button
            onClick={handleOk}
            className="continue-btn bg-violet txt-white txt-fontweight-500 bd-radius-5"
          >
            Continue
          </button>
        }
      >
        <p>
          <span className="txt-violet txt-fontweight-700 modal-span">
            {">"}
          </span>{" "}
          This is a timed game. Time left is always displayed{" "}
        </p>
        <p>
          <span className="txt-violet txt-fontweight-700 modal-span">
            {">"}
          </span>{" "}
          Press Caps Lock to unlock the keys
        </p>
        <p>
          <span className="txt-violet txt-fontweight-700 modal-span">
            {">"}
          </span>{" "}
          Pressing any{" "}
          <span className="txt-fontweight-500 modal-span">key</span> or{" "}
          <span className="txt-fontweight-500 modal-span">START</span> button
          will automaticaly start the game
        </p>
        <p>
          <span className="txt-violet txt-fontweight-700 modal-span">
            {">"}
          </span>{" "}
          If you want your scores to be saved, you can accept it after finishing
          a level
        </p>
        <p>
          <span className="txt-violet txt-fontweight-700 modal-span">
            {">"}
          </span>{" "}
          To turn on background music, press volume up icon
        </p>
        <p>
          {" "}
          <span className="txt-violet txt-fontweight-700 modal-span">
            {">"}
          </span>{" "}
          To turn off background music, press volume down icon
        </p>
        <p>
          <span className="txt-fontweight-700 modal-span">NB:</span> The timer
          counts only when you are not typing or when you type a wrong character
        </p>
        <p className="txt-fontweight-600" style={{ textAlign: "center" }}>
          GOOD LUCK! :)
        </p>
      </Modal>
    </>
  );
};

export const SaveScoreModal = ({
  handleOk,
  handleCancel,
  isScoreModalVisible,
  isLoading,
}) => {
  return (
    <>
      <Modal
        closable={false}
        maskClosable={false}
        title={
          <>
            <h1 className="txt-violet" style={{ fontSize: "22px" }}>
              <CheckCircleOutlined style={{ float: "left" }} size={24} />
            </h1>
            &nbsp; &nbsp; &nbsp;
            <h1
              className="instructions-title txt-violet txt-fontweight-700"
              style={{ float: "left" }}
            >
              Save Score
            </h1>
          </>
        }
        visible={isScoreModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={
          <>
            <button className="cancel-btn" onClick={handleCancel}>
              No
            </button>
            <button
              onClick={handleOk}
              className="continue-btn bg-violet txt-white txt-fontweight-500"
            >
              {isLoading ? <SimpleSpinner style={{ color: "white" }} /> : null}{" "}
              Yes
            </button>
          </>
        }
      >
        <p style={{ fontSize: "16px" }}>
          Do you want to save your score for this game level ?
        </p>
      </Modal>
    </>
  );
};
