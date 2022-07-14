import { Col } from "antd";
import styled from "styled-components";
import Button from "../../components/Button";
import Typography from "../../components/Typography";

const Component = () => {
  const ColStyled = styled(Col)`
    padding: 30px 0px 30px 30px;
  `;
  return (
    <Col span={24}>
      <Col span={8}>
        <ColStyled span={24}>
          <Typography color="red">Components</Typography>
        </ColStyled>
        <ColStyled span={24}>
          <Typography color="#223263">Button</Typography>
        </ColStyled>
        <ColStyled span={24}>
          <Button secondary>Click Me!</Button>
        </ColStyled>
        <ColStyled span={24}>
          <Button primary>Click Me!</Button>
        </ColStyled>
        <ColStyled span={24}>
          <Button primary size="150px">
            Click Me!
          </Button>
        </ColStyled>
      </Col>
    </Col>
  );
};

export default Component;
