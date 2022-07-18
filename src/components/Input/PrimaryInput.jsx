import { useField } from "formik";
import { InputBase, InputArea, IconArea, ErrorMessage, Title } from "./styled";
import { UserOutlined } from "@ant-design/icons";
import { useEffect, useRef } from "react";

const PrimaryInput = ({
  label,
  name,
  placeholder = "Placeholder",
  icon = <UserOutlined />,
  $width = "100%",
  $height = "48px",
  ...rest
}) => {
  const refField = useRef(
    Math.random()
      .toString(36)
      .replace(/[^a-z]+/g, "")
  );
  const [field, meta] = useField(name ?? refField.current);

  const $active =
    field?.value !== "" && field?.value !== null && field?.value !== undefined;
  return (
    <>
      {label && <Title htmlFor={name}>{label}</Title>}
      <InputArea
        $active={$active}
        $error={!!meta?.error}
        $width={$width}
        $height={$height}
      >
        <IconArea $active={$active} $error={!!meta?.error}>
          {icon}
        </IconArea>
        <InputBase placeholder={placeholder} id={name} {...field} {...rest} />
      </InputArea>
      {meta?.error && meta?.touched && (
        <ErrorMessage className="error-message">{meta.error}</ErrorMessage>
      )}
    </>
  );
};

export default PrimaryInput;
