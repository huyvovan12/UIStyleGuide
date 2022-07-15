import { Col } from "antd";
import styled from "styled-components";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Typography from "../../components/Typography";

const Component = () => {
  const ColStyled = styled(Col)`
    padding: 30px 0px 30px 30px;
  `;
  return (
    <Col span={24} style={{ display: "flex" }}>
      <ColStyled span={3}>
        <Typography color="red">Components</Typography>
      </ColStyled>
      <Col span={8}>
        <ColStyled span={24}>
          <Button $type="secondary" $width="300px">
            Click Me!
          </Button>
        </ColStyled>
        <ColStyled span={24}>
          <Button $type="primary">Click Me!</Button>
        </ColStyled>
        <ColStyled span={24}>
          <Button $type="primary" disabled>
            Click Me!
          </Button>
        </ColStyled>
        <ColStyled span={24}>
          <Button $type="secondary" disabled>
            Click Me!
          </Button>
        </ColStyled>
        <ColStyled span={24}>
          <Input />
        </ColStyled>
      </Col>
    </Col>
  );
};

export default Component;
