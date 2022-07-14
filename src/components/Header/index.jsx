import { Col } from "antd";
import styled from "styled-components";
import Typography from "../Typography";
import styles from "./index.module.sass";

const StyledCol = styled(Col)`
  color: yellow;
  height: 109px;
  background-color: #ff0000;
`;

const Header = ({ title }) => {
  return (
    <StyledCol span={24} className="header">
      <Col span={7} size={24} color={"white"} style={{ height: "100%" }}>
        <Col span={24} className={styles.header}>
          <Typography size="24px">{title}</Typography>
        </Col>
      </Col>
    </StyledCol>
  );
};

export default Header;
