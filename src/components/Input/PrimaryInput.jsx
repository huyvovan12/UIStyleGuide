import { useField } from "formik";
import { InputBase, InputArea, IconArea, ErrorMessage, Title } from "./styled";
import { UserOutlined } from "@ant-design/icons";
import { useRef } from "react";

const PrimaryInput = ({
  label,
  name,
  placeholder = "Placeholder",
  icon = <UserOutlined />,
  $width = "100%",
  $height = "48px",
  $error,
  errorMessage,
  ...rest
}) => {
  const refField = useRef(
    Math.random()
      .toString(36)
      .replace(/[^a-z]+/g, "")
  );
  const [field] = useField(name ?? refField.current);
  const $active =
    field.value !== "" && field.value !== null && field.value !== undefined;
  return (
    <>
      {label && <Title htmlFor={name}>{label}</Title>}
      <InputArea
        $error={$error}
        $width={$width}
        $height={$height}
        $active={$active}
      >
        <IconArea $error={$error} $active={$active}>
          {icon}
        </IconArea>
        <InputBase placeholder={placeholder} id={name} {...field} {...rest} />
      </InputArea>
      {errorMessage && (
        <ErrorMessage className="error-message">{errorMessage}</ErrorMessage>
      )}
    </>
  );
};

export default PrimaryInput;
