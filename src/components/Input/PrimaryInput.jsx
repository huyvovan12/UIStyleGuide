import { useField } from "formik";
import { InputBase, InputArea, IconArea, ErrorMessage, Title } from "./styled";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const PrimaryInput = ({
  title,
  name = "",
  placeholder = "Placeholder",
  icon = <UserOutlined />,
  $width = "100%",
  $height = "48px",
  ...rest
}) => {
  const [field, meta] = useField(name);
  const $active = field.value !== "";
  return (
    <>
      {title && <Title>{title}</Title>}
      <InputArea
        $active={$active}
        $error={!!meta.error}
        $width={$width}
        $height={$height}
      >
        <IconArea $active={$active} $error={!!meta.error}>
          {icon}
        </IconArea>
        <InputBase placeholder={placeholder} {...field} {...rest} />
      </InputArea>
      {meta.error && meta.touched && (
        <ErrorMessage className="error-message">{meta.error}</ErrorMessage>
      )}
    </>
  );
};

export default PrimaryInput;
