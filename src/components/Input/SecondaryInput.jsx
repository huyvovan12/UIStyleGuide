import { useField } from "formik";
import { InputBase, InputArea, ErrorMessage, Title } from "./styled";

const SecondaryInput = ({
  label,
  name = "name",
  $width = "100%",
  $height,
  $error,
  errorMessage,
  placeholder = "Placeholder",
  ...rest
}) => {
  const [field] = useField(name);
  const $active =
    field.value !== "" && field.value !== null && field.value !== undefined;

  return (
    <>
      {label && <Title htmlFor="input_secondary">{label}</Title>}
      <InputArea
        $active={$active}
        $error={$error}
        $width={$width}
        $height={$height}
      >
        <InputBase
          placeholder={placeholder}
          $active={$active}
          $error={$error}
          id="input_secondary"
          {...field}
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
