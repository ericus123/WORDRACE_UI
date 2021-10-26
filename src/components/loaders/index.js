import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

export const SimpleSpinner = ({ color, size }) => {
  const antIcon = <LoadingOutlined style={{ fontSize: size }} spin />;
  return <Spin style={{ color }} indicator={antIcon} />;
};
