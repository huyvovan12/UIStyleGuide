import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useField } from "formik";
import { InputBase, InputArea, IconArea, ErrorMessage, Title } from "./styled";

export const IconInput = ({ $type, name, placeholder, ...rest }) => {
  const [field, meta] = useField(name);
  const $active = field.value !== "";
  console.log(field);
  return (
    <>
      <InputArea $active={$active} $error={!!meta.error}>
        <IconArea $active={$active} $error={!!meta.error}>
          {$type === "user" ? (
            <UserOutlined className="site-form-item-icon" />
          ) : (
            <LockOutlined className="site-form-item-icon" />
          )}
        </IconArea>
        <InputBase
          placeholder={placeholder || "placeholder"}
          type={$type === "password" ? "password" : ""}
          {...field}
          {...rest}
        />
      </InputArea>
      {meta.error && meta.touched && (
        <ErrorMessage className="error-message">{meta.error}</ErrorMessage>
      )}
    </>
  );
};

export const NormalInput = ({ title, placeholder, name, ...rest }) => {
  const [field, meta] = useField(name);
  const $active = field.value !== "";
  return (
    <>
      <Title>{title ? title : ""}</Title>
      <InputArea $active={$active} $error={!!meta.error}>
        <InputBase
          placeholder={placeholder || "placeholder"}
          $active={$active}
          $error={!!meta.error}
          {...field}
          {...rest}
        />
      </InputArea>
      {meta.error && meta.touched && (
        <ErrorMessage className="error-message">{meta.error}</ErrorMessage>
      )}
    </>
  );
};
