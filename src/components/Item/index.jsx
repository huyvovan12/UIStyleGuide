import { Col, Row, Typography, Space, Divider } from "antd";
import { Container } from "./styled";

const { Text } = Typography;
const Item = ({ item }) => {
  return (
    <Col span={6} style={{ height: "33.33%", padding: "7px" }}>
      <Container>
        <Row>
          <Col span={24}>
            <Text strong>Title: title</Text>
          </Col>
          <Col span={24}>
            <Text>Creator: Huy</Text>
          </Col>
          <Col span={24}>
            <Text style={{ color: "#04BE00" }} strong>
              Status: New
            </Text>
          </Col>
          <Col span={24}>
            <Divider
              style={{ borderTop: "2px solid #675BF1", margin: "5px 0" }}
            />
          </Col>
          <Col span={24}>
            <Text strong>Description:</Text>
          </Col>
          <Col span={24}>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              fugit, dicta doloremque, iste, officiis hic voluptate quis
              temporibus eos praesentium obcaecati? Quam, consequuntur enim
              voluptates est dolorum veritatis porro perferendis.
            </Text>
          </Col>
        </Row>
      </Container>
    </Col>
  );
};

export default Item;
