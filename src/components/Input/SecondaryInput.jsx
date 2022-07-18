import { useField } from "formik";
import { InputBase, InputArea, ErrorMessage, Title } from "./styled";

const SecondaryInput = ({
  title,
  name = "name",
  $width = "100%",
  $height,
  placeholder = "Placeholder",
  ...rest
}) => {
  const [field, meta] = useField(name);
  const $active =
    field.value !== "" && field.value !== null && field.value !== undefined;

  return (
    <>
      {title && <Title htmlFor="input_secondary">{title}</Title>}
      <InputArea
        $active={$active}
        $error={!!meta.error}
        $width={$width}
        $height={$height}
      >
        <InputBase
          placeholder={placeholder}
          $active={$active}
          $error={!!meta.error}
          id="input_secondary"
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

export default SecondaryInput;
