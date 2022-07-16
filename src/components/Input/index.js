import { NormalInput, PasswordInput, UserInput } from "./CustomInput";

const Input = ({ $type, placeholder, name, ...rest }) => {
  switch ($type) {
    case "password":
      return <PasswordInput name={name} placeholder={placeholder} {...rest} />;
    case "user":
      return <UserInput name={name} placeholder={placeholder} {...rest} />;
    default:
      return <NormalInput name={name} placeholder={placeholder} {...rest} />;
  }
};

export default Input;
