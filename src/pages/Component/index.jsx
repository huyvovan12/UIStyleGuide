import { Col } from "antd";
import styled from "styled-components";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Typography from "../../components/Typography";
import { Formik, Form } from "formik";
// import Select from "../../components/Select";
import { Select, Option } from "../../components/Select";
import { LockOutlined } from "@ant-design/icons";
import * as Yup from "yup";
const Component = () => {
  const ColStyled = styled(Col)`
    padding: 30px 0px 30px 30px;
  `;
  const array = [
    {
      label: "1",
      value: "4",
    },
    {
      label: "2",
      value: "5",
    },
    {
      label: "3",
      value: "6",
    },
  ];
  return (
    <Col span={24} style={{ display: "flex" }}>
      <ColStyled span={3}>
        <Typography color="red">Components</Typography>
      </ColStyled>
      <Col span={8}>
        <ColStyled span={24}></ColStyled>
        <ColStyled span={24}>
          <Button $type="secondary" $width="200px">
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
      </Col>
      <Col span={6} style={{ marginLeft: "30px" }}>
        <Formik
          initialValues={{
            user: "",
            name: "",
          }}
          validationSchema={Yup.object({
            user: Yup.string().required("Required"),
            name: Yup.number().max(4, "max < 4").required("Required"),
          })}
          onSubmit={(values) => {
            console.log(values);
          }}
          validateOnChange={false}
        >
          {({ setFieldValue, errors }) => {
            return (
              <Form>
                <Input
                  $type="primary"
                  name="user"
                  placeholder="UserName"
                  icon={<LockOutlined />}
                  $width="200px"
                  label="họ và tên"
                  onBlur={(e) => setFieldValue("user", e.target.value)}
                  $error={!!errors.user}
                  errorMessage={errors.user}
                />
                <Select
                  $width="150px"
                  $height="30px"
                  name="name"
                  placeholder="chọn tuổi"
                  label="Chọn tuổi"
                  onChange={(value) => setFieldValue("name", value)}
                  $error={!!errors.name}
                  errorMessage={errors.name}
                >
                  {array.map((e) => (
                    <Option value={e.value} key={e.value}>
                      {e.label}
                    </Option>
                  ))}
                </Select>
                <Button htmlType="submit" $type="primary" $width="200px">
                  Click!
                </Button>
              </Form>
            );
          }}
        </Formik>
      </Col>
    </Col>
  );
};

export default Component;
