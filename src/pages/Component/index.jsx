import { Col } from "antd";
import styled from "styled-components";
import Button from "../../components/Button";
import FormItem from "../../components/Form";
import Typography from "../../components/Typography";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Component = () => {
  const ColStyled = styled(Col)`
    padding: 30px 0px 30px 30px;
  `;
  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(70, "Too Long!")
      .required("Required"),
  });
  return (
    <Col span={24} style={{ display: "flex" }}>
      <ColStyled span={3}>
        <Typography color="red">Components</Typography>
      </ColStyled>
      <Col span={8}>
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
        <ColStyled span={24}>
          <Button primary size="150px" disabled>
            Click Me!
          </Button>
        </ColStyled>
      </Col>
      <Col span={8}>
        <ColStyled span={24}>
          <Typography color="#223263">Form</Typography>
        </ColStyled>
        <ColStyled span={24}>
          <Formik
            initialValues={{
              name: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              // same shape as initial values
              console.log(values);
            }}
          >
            {({ errors, touched }) => {
              return (
                <Form>
                  <FormItem name="name" onChangeText={handleChange("email")} />
                  {errors.name && touched.name ? (
                    <div>{errors.name}</div>
                  ) : null}
                  <button type="submit">Submit</button>
                </Form>
              );
            }}
          </Formik>
        </ColStyled>
      </Col>
    </Col>
  );
};

export default Component;
