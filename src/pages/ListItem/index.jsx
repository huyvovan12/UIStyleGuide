import { Col, Row } from "antd";
import Item from "../../components/Item";

const ListItem = () => {
  return (
    <Col span={19}>
      <Row style={{ height: "80%", width: "100%", display: "flex" }}>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </Row>
      <Row style={{ height: "10%", width: "100%" }}>paginator</Row>
    </Col>
  );
};

export default ListItem;
