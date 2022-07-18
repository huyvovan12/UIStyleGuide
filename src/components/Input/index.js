import PrimaryInput from "./PrimaryInput";
import SecondaryInput from "./SecondaryInput";

const Input = ({ $type, placeholder, name, ...rest }) => {
  switch ($type) {
    case "primary":
      return <PrimaryInput name={name} placeholder={placeholder} {...rest} />;
    case "secondary":
      return <SecondaryInput name={name} placeholder={placeholder} {...rest} />;
    default:
      return <SecondaryInput placeholder={placeholder} name={name} {...rest} />;
  }
};

export default Input;
