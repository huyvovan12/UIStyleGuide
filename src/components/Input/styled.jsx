import { Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import styled from "styled-components";
import styles from "./index.module.sass";
import { useEffect, useRef, useState } from "react";

export const InputBase = styled(Input)`
  ${({ $height }) =>
    $height &&
    `
      height: ${$height};
    `}
`;

export const PasswordInput = ({ placeholder, ...rest }) => {
  const inputRef = useRef("");
  const [value, setValue] = useState("");
  useEffect(() => {
    console.log(value);
    if (value.trim() !== "") {
      inputRef.current.className = `${styles.input} ${styles.active}`;
    } else {
      inputRef.current.className = `${styles.input}`;
    }
    console.log(inputRef.className);
  }, [value]);

  return (
    <div className={styles.input} ref={inputRef}>
      <div className={styles.icon}>
        <UserOutlined className="site-form-item-icon" />
      </div>
      <InputBase
        className={styles["input_field"]}
        placeholder={placeholder || "placeholder"}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        {...rest}
      />
    </div>
  );
};
