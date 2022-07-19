import { useState } from "react";
import { InputBase, InputArea, ErrorMessage, Title } from "./styled";

const SecondaryInput = ({
  label,
  name,
  $width = "100%",
  $height,
  $error,
  errorMessage,
  placeholder = "Placeholder",
  ...rest
}) => {
  const [value, setValue] = useState(null);

  return (
    <>
      {label && <Title htmlFor="input_secondary">{label}</Title>}
      <InputArea
        $active={!!value}
        $error={$error}
        $width={$width}
        $height={$height}
      >
        <InputBase
          placeholder={placeholder}
          $active={!!value}
          $error={$error}
          id="input_secondary"
          onChange={(e) => setValue(e.target.value)}
          {...rest}
        />
      </InputArea>
      {errorMessage && (
        <ErrorMessage className="error-message">{errorMessage}</ErrorMessage>
      )}
    </>
  );
};

export default SecondaryInput;
