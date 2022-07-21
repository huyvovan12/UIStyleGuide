import { Checkbox, Col, DatePicker, Radio, TimePicker } from "antd";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Formik, Form, FieldArray } from "formik";
import { Select } from "../../components/Select";
import { LockOutlined } from "@ant-design/icons";

import moment from "moment";
import Label from "../../components/Helpers/Label";
import ErrorMessage from "../../components/Helpers/ErrorMessage";
import { Container } from "../../components/Input/styled";
const Color = () => {
  const helperTime = (value1, value2) => {
    return [
      moment(value1).format("ss:mm:hh"),
      moment(value2).format("ss:mm:hh"),
    ];
  };
  const helperDate = (value1, value2) => {
    return [
      moment(value1).format("DD/MM/YYYY"),
      moment(value2).format("DD/MM/YYYY"),
    ];
  };
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
      <div>
        <Formik
          initialValues={{
            friends: [
              { key: 1, value: "jet" },
              { key: 2, value: "ian" },
              { key: 3, value: "brent" },
            ],
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
          validateOnChange={false}
        >
          {({ setFieldValue, errors, values, handleChange }) => {
            return (
              <Form>
                <div style={{ height: "70px" }}>
                  <Input
                    $type="primary"
                    name="input"
                    placeholder="UserName"
                    icon={<LockOutlined />}
                    $width="200px"
                    label="họ và tên"
                    onChange={handleChange("input")}
                    $error={!!errors.input}
                    errorMessage={errors.input}
                  />
                </div>
                <div style={{ height: "70px" }}>
                  <Select
                    $width="200px"
                    $height="48px"
                    placeholder="chọn tuổi"
                    label="Chọn tuổi"
                    onChange={handleChange("select")}
                    $error={!!errors.select}
                    errorMessage={errors.select}
                    options={array}
                  />
                </div>
                <div style={{ height: "70px" }}>
                  <Label>Checkbox</Label>
                  <Checkbox.Group
                    style={{ width: "100%" }}
                    onChange={(e) => setFieldValue("checkbox", e)}
                    options={array}
                  />
                  {errors.checkbox && (
                    <ErrorMessage>{errors.checkbox}</ErrorMessage>
                  )}
                </div>
                <div style={{ height: "70px" }}>
                  <Label>Radio Button</Label>
                  <br />
                  <Radio.Group
                    options={array}
                    onChange={handleChange("radiobutton")}
                  />
                  {errors.RadioButton && (
                    <ErrorMessage>{errors.RadioButton}</ErrorMessage>
                  )}
                </div>
                <div style={{ height: "70px" }}>
                  <Label>Date Picker</Label>
                  <br />
                  <DatePicker
                    format={"DD/MM/YYYY"}
                    onChange={(value) =>
                      setFieldValue(
                        "datepicker",
                        moment(value._d).format("DD/MM/YYYY")
                      )
                    }
                  />
                  {errors.datepicker && (
                    <ErrorMessage>{errors.datepicker}</ErrorMessage>
                  )}
                </div>
                <div style={{ height: "70px" }}>
                  <Label>Time Picker</Label>
                  <br />
                  <TimePicker
                    onChange={(value) =>
                      setFieldValue(
                        "timepicker",
                        moment(value._d).format("ss:mm:hh")
                      )
                    }
                  />
                  {errors.timepicker && (
                    <ErrorMessage>{errors.timepicker}</ErrorMessage>
                  )}
                </div>
                <div style={{ height: "70px" }}>
                  <Label>Range Time Picker</Label>
                  <br />
                  <TimePicker.RangePicker
                    onChange={(value) =>
                      setFieldValue(
                        "RangeTimePicker",
                        helperTime(value[0]._d, value[1]._d)
                      )
                    }
                  />
                  {errors.RangeTimePicker && (
                    <ErrorMessage>{errors.RangeTimePicker}</ErrorMessage>
                  )}
                </div>
                <div style={{ height: "70px" }}>
                  <Label>Range Date Picker</Label>
                  <br />
                  <DatePicker.RangePicker
                    format="DD/MM/YYYY"
                    onChange={(value) =>
                      setFieldValue(
                        "RangeDatePicker",
                        helperDate(value[0]._d, value[1]._d)
                      )
                    }
                  />
                  {errors.RangeDatePicker && (
                    <ErrorMessage>{errors.RangeDatePicker}</ErrorMessage>
                  )}
                </div>
                <div style={{ height: "150px" }}>
                  <FieldArray
                    name="friends"
                    render={(arrayHelpers) => (
                      <>
                        {values.friends && values.friends.length > 0 ? (
                          values.friends.map((item, index) => (
                            <Container
                              key={item.key}
                              style={{ display: "flex" }}
                            >
                              <Input
                                $width="60%"
                                value={values.friends?.[index].value}
                                placeholder=""
                                onChange={handleChange(
                                  `friends.${index}.value`
                                )}
                              />
                              <Button
                                type="button"
                                $width="40px"
                                $height="40px"
                                onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                              >
                                -
                              </Button>
                              <Button
                                type="button"
                                $width="40px"
                                $height="40px"
                                onClick={() => arrayHelpers.insert(index, "")} // insert an empty string at a position
                              >
                                +
                              </Button>
                            </Container>
                          ))
                        ) : (
                          <Button
                            type="button"
                            onClick={() => arrayHelpers.push("")}
                          >
                            Add a friend
                          </Button>
                        )}
                      </>
                    )}
                  />
                </div>
                <div style={{ height: "70px" }}>
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
