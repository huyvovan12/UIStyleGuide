import { UserOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { useEffect, useRef, useState } from "react";
import styles from "./index.module.sass";

const FormItem = ({ placeholder, ...props }) => {
  const [value, setValue] = useState("");
  const inputRef = useRef();
  useEffect(() => {
    if (value.trim() !== "") {
      inputRef.current.className = `${styles.input} ${styles.active}`;
    } else {
      inputRef.current.className = `${styles.input}`;
    }
  }, [value]);

  return (
    <div className={styles.input} ref={inputRef}>
      <div className={styles.icon}>
        <UserOutlined className="site-form-item-icon" />
      </div>
      <Input
        placeholder={placeholder || "placeholder"}
        className={styles["input_field"]}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        {...props}
      />
    </div>
  );
};

export default FormItem;
