import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useField } from "formik";
import { useEffect, useRef } from "react";
import { InputBase, InputArea } from "./styled";

export const PasswordInput = ({ name, placeholder, ...rest }) => {
  const inputRef = useRef();
  const [field, meta] = useField(name);
  useEffect(() => {
    if (meta.value.trim() !== "") {
      inputRef.current.className = `input active`;
    } else {
      inputRef.current.className = `input`;
    }
    if (meta.error && meta.touched) {
      inputRef.current.className = `input errors`;
    } else {
      inputRef.current.className = `input`;
    }
  }, [meta.value, meta.error, meta.touched]);

  return (
    <InputArea>
      <div className="input" ref={inputRef}>
        <div className="icon">
          <LockOutlined className="site-form-item-icon" />
        </div>
        <InputBase
          className="input_field"
          placeholder={placeholder || "placeholder"}
          {...field}
          {...rest}
        />
      </div>
      {meta.error && meta.touched && (
        <div className="error-message">{meta.error}</div>
      )}
    </InputArea>
  );
};

export const UserInput = ({ name, placeholder, ...rest }) => {
  const inputRef = useRef();
  const [field, meta] = useField(name);
  useEffect(() => {
    if (meta.value.trim() !== "") {
      inputRef.current.className = `input active`;
    } else {
      inputRef.current.className = `input`;
    }
    if (meta.error && meta.touched) {
      inputRef.current.className = `input errors`;
    } else {
      inputRef.current.className = `input`;
    }
  }, [meta.value, meta.error, meta.touched]);
  return (
    <InputArea>
      <div className="input" ref={inputRef}>
        <div className="icon">
          <UserOutlined className="site-form-item-icon" />
        </div>
        <InputBase
          className="input_field"
          placeholder={placeholder || "placeholder"}
          {...field}
          {...rest}
        />
      </div>
      {meta.error && meta.touched && (
        <div className="error-message">{meta.error}</div>
      )}
    </InputArea>
  );
};

export const NormalInput = ({ title, placeholder, name, ...rest }) => {
  const inputRef = useRef();
  const [field, meta] = useField(name);
  useEffect(() => {
    if (meta.value.trim() !== "") {
      inputRef.current.className = `input active`;
    } else {
      inputRef.current.className = `input`;
    }
    if (meta.error && meta.touched) {
      inputRef.current.className = `input errors`;
    } else {
      inputRef.current.className = `input`;
    }
  }, [meta.value, meta.error, meta.touched]);

  return (
    <InputArea>
      <div className="title">{title ? title : ""}</div>
      <div className="input" ref={inputRef}>
        <InputBase
          className="input_field"
          placeholder={placeholder || "placeholder"}
          {...field}
          {...rest}
        />
      </div>
      {meta.error && meta.touched && (
        <div className="error-message">{meta.error}</div>
      )}
    </InputArea>
  );
};
