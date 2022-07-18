import { useField } from "formik";
import { InputBase, InputArea, ErrorMessage, Title } from "./styled";

const SecondaryInput = ({
  title,
  name = "",
  $width = "100%",
  $height,
  placeholder = "Placeholder",
  ...rest
}) => {
  const [field, meta] = useField(name);
  const $active = field.value !== "";
  console.log($width);
  return (
    <>
      {title && <Title>{title}</Title>}
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
