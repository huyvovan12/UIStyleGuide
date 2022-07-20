import {
  InputBase,
  InputArea,
  IconArea,
  ErrorMessage,
  Title,
  Container,
} from "./styled";
import { UserOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";

const PrimaryInput = ({
  label,
  name,
  placeholder = "Placeholder",
  icon = <UserOutlined />,
  $width = "100%",
  $height = "48px",
  $error,
  onChange,
  errorMessage,
  ...rest
}) => {
  const [value, setValue] = useState(null);
  const [isChanged, setIsChanged] = useState(false);

  const handleChange = (e) => {
    setIsChanged(true);
    setValue(e.target.value);
  };

  useEffect(() => {
    if (onChange) {
      isChanged && onChange(value);
    }
  }, [isChanged, value]);
  return (
    <Container>
      {label && <Title htmlFor={name}>{label}</Title>}
      <InputArea
        $error={$error}
        $width={$width}
        $height={$height}
        $active={!!value}
      >
        <IconArea $error={$error} $active={!!value}>
          {icon}
        </IconArea>
        <InputBase
          placeholder={placeholder}
          id={name}
          onChange={handleChange}
          {...rest}
        />
      </InputArea>
      {errorMessage && (
        <ErrorMessage className="error-message">{errorMessage}</ErrorMessage>
      )}
    </Container>
  );
};

export default PrimaryInput;
