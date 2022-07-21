import { Col } from "antd";
import Button from "../Button";

const Sidebar = () => {
  return (
    <Col span={5} style={{ background: "#F88F14", height: "100vh" }}>
      <Button
        style={{
          borderRadius: "0px",
          background: "transparent",
          borderBottom: "2px solid white",
        }}
      >
        All Task
      </Button>
      <Button
        style={{
          borderRadius: "0px",
          background: "transparent",
          borderBottom: "2px solid white",
        }}
      >
        New Task
      </Button>
      <Button
        style={{
          borderRadius: "0px",
          background: "transparent",
          borderBottom: "2px solid white",
        }}
      >
        Doing
      </Button>
      <Button
        style={{
          borderRadius: "0px",
          background: "transparent",
          borderBottom: "2px solid white",
        }}
      >
        Done Task
      </Button>
    </Col>
  );
};

export default Sidebar;
