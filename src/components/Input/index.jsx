import { PasswordInput } from "./styled";

const Input = ({ $type, ...rest }) => {
  // return (
  //   <div className={styles.input} ref={inputRef}>
  //     <div className={styles.icon}>
  //       <UserOutlined className="site-form-item-icon" />
  //     </div>
  //     <Input
  //       placeholder={placeholder || "placeholder"}
  //       className={styles["input_field"]}
  //       value={value}
  //       onChange={(e) => setValue(e.target.value)}
  //       {...props}
  //     />
  //   </div>
  // );

  switch ($type) {
    case "password":
      return <PasswordInput {...rest} />;
    default:
      return <PasswordInput {...rest} />;
  }
};

export default Input;
