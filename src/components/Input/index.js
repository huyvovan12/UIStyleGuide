import { NormalInput, IconInput } from "./CustomInput";

const Input = ({ $type, placeholder, name, ...rest }) => {
  if ($type === "user" || $type === "password") {
    return (
      <IconInput
        $type={$type}
        name={name}
        placeholder={placeholder}
        {...rest}
      />
    );
  }
  return <NormalInput name={name} placeholder={placeholder} {...rest} />;
};

export default Input;
