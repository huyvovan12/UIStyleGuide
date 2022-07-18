import PrimaryInput from "./PrimaryInput";
import SecondaryInput from "./SecondaryInput";

const Input = ({ $type, placeholder, ...rest }) => {
  switch ($type) {
    case "primary":
      return <PrimaryInput placeholder={placeholder} {...rest} />;
    case "secondary":
      return <SecondaryInput placeholder={placeholder} {...rest} />;
    default:
      return <SecondaryInput placeholder={placeholder} {...rest} />;
  }
};

export default Input;
