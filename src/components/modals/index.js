import { Modal } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";

export const gameSaveConfirm = () => {
  Modal.confirm({
    title: "Confirm",
    icon: <CheckCircleOutlined style={{ color: "green" }} />,
    content: "Do you want to save this level?",
    okText: "Yes",
    cancelText: "No",
  });
};
