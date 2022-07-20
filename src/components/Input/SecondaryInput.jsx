import { useState, useEffect } from "react";
import { InputBase, InputArea, ErrorMessage, Title } from "./styled";

const SecondaryInput = ({
  label,
  name,
  $width = "100%",
  $height,
  $error,
  errorMessage,
  placeholder = "Placeholder",
  onChange,
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
          onChange={handleChange}
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
