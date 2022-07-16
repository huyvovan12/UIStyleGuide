import { Col } from "antd";
import styled from "styled-components";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Typography from "../../components/Typography";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";

const SignupSchema = Yup.object().shape({
  user: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

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
        {/* <ColStyled span={24}>
          <Input placeholder="123" title="Họ và tên" />
        </ColStyled> */}
        {/* <ColStyled span={24}>
          <Input $type="password" placeholder="Password" />
        </ColStyled> */}
      </Col>
      {/* <Formik
        initialValues={{
          user: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {() => {
          return (
            <Form>
              <Input title="user name" name="user" placeholder="UserName" />
              <button type="submit">Submit</button>
            </Form>
          );
        }}
      </Formik> */}
    </Col>
  );
};

export default Component;
