import { Checkbox, Col, DatePicker, Row, TimePicker, Typography } from "antd";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Formik, Form, FieldArray, Field } from "formik";
// import Select from "../../components/Select";
import { Select, Option } from "../../components/Select";
import { LockOutlined } from "@ant-design/icons";
import moment from "moment";
import * as Yup from "yup";
const { Title } = Typography;
const Color = () => {
  const array = [
    {
      label: "1",
      value: "1",
    },
    {
      label: "2",
      value: "2",
    },
    {
      label: "3",
      value: "3",
    },
    {
      label: "5",
      value: "5",
    },
  ];
  return (
    <Col
      span={24}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          height: "90vh",
          width: "400px",
          border: "3px solid black",
          borderRadius: "8px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Formik
          initialValues={{ friends: ["jared", "ian", "brent"] }}
          onSubmit={(values) => {
            console.log(values);
          }}
          validateOnChange={false}
        >
          {({ setFieldValue, errors, values }) => {
            return (
              <Form>
                <Title> Form </Title>
                <div style={{ height: "100px" }}>
                  <Input
                    $type="primary"
                    name="input"
                    placeholder="UserName"
                    icon={<LockOutlined />}
                    $width="200px"
                    label="họ và tên"
                    onBlur={(e) => setFieldValue("input", e.target.value)}
                    $error={!!errors.input}
                    errorMessage={errors.input}
                  />
                </div>
                <div style={{ height: "100px" }}>
                  <Select
                    $width="200px"
                    $height="48px"
                    placeholder="chọn tuổi"
                    label="Chọn tuổi"
                    onChange={(value) => setFieldValue("select", value)}
                    $error={!!errors.select}
                    errorMessage={errors.select}
                  >
                    {array.map((e) => (
                      <Option value={e.value} key={e.value}>
                        {e.label}
                      </Option>
                    ))}
                  </Select>
                </div>
                <div style={{ height: "100px" }}>
                  <Checkbox.Group
                    style={{ width: "100%" }}
                    onChange={(e) => setFieldValue("checkbox", e)}
                  >
                    <Row>
                      <Col span={8}>
                        <Checkbox value="A">A</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox value="B">B</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox value="C">C</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox value="D">D</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox value="E">E</Checkbox>
                      </Col>
                    </Row>
                  </Checkbox.Group>
                </div>
                <div style={{ height: "100px" }}>
                  <DatePicker
                    format={"YYYY/MM/DD"}
                    onChange={(value) =>
                      setFieldValue(
                        "datepicker",
                        moment(value, "YYYY/MM/DD")._d
                      )
                    }
                  />
                </div>
                <div style={{ height: "100px" }}>
                  <TimePicker
                    size="large"
                    onChange={(value) =>
                      setFieldValue("timepicker", moment(value)._d)
                    }
                  />
                </div>
                <div style={{ height: "100px" }}>
                  <TimePicker.RangePicker
                    onChange={(value) => setFieldValue("rangepicker", value)}
                  />
                </div>
                <FieldArray
                  name="friends"
                  render={(arrayHelpers) => (
                    <div>
                      {values.friends && values.friends.length > 0 ? (
                        values.friends.map((friend, index) => (
                          <div key={index}>
                            <Field
                              name={`friends.${index}`}
                              defaultValue={friend}
                            />
                            <button
                              type="button"
                              onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                            >
                              -
                            </button>
                            <button
                              type="button"
                              onClick={() => arrayHelpers.insert(index, "")} // insert an empty string at a position
                            >
                              +
                            </button>
                          </div>
                        ))
                      ) : (
                        <button
                          type="button"
                          onClick={() => arrayHelpers.push("")}
                        >
                          Add a friend
                        </button>
                      )}
                    </div>
                  )}
                />
                <div style={{ height: "100px" }}>
                  <Button htmlType="submit" $type="primary" $width="200px">
                    Click!
                  </Button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </Col>
  );
};
export default Color;
