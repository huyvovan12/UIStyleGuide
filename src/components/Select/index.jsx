import { Container, CustomOption, CustomSelect, ErrorMessage } from "./styled";
import { DownOutlined } from "@ant-design/icons";
import { useState } from "react";
export const Select = ({ children, errorMessage, $width, error, ...rest }) => {
  const [rotate, setRotate] = useState(0);
  return (
    <Container id="container" onClick={() => setRotate(rotate + 180)}>
      <CustomSelect
        getPopupContainer={() => document.getElementById("container")}
        $width={$width}
        suffixIcon={<DownOutlined rotate={rotate} />}
        error={error}
        defaultValue="123"
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
    <CustomOption value={$value} $width={$width} $height {...rest}>
      {children}
    </CustomOption>
  );
};
