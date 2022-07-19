import {
  Container,
  CustomOption,
  CustomSelect,
  ErrorMessage,
  Label,
} from "./styled";
import { DownOutlined } from "@ant-design/icons";
import { useState } from "react";
export const Select = ({
  children,
  errorMessage,
  $width,
  $error,
  label,
  $height,
  ...rest
}) => {
  const [rotate, setRotate] = useState(0);
  return (
    <Container id="container" onClick={() => setRotate(rotate + 180)}>
      {label && <Label htmlFor="select">{label}</Label>}
      <CustomSelect
        getPopupContainer={() => document.getElementById("container")}
        $width={$width}
        $height={$height}
        suffixIcon={<DownOutlined rotate={rotate} />}
        $error={$error}
        id="select"
        {...rest}
      >
        {children}
      </CustomSelect>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Container>
  );
};

export const Option = ({ children, $width, $value, ...rest }) => {
  return (
    <CustomOption value={$value} $height {...rest}>
      {children}
    </CustomOption>
  );
};
