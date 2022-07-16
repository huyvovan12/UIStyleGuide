import { Input } from "antd";
import { IconMap } from "antd/lib/result";
import styled from "styled-components";

export const InputBase = styled(Input)`
  ${({ $height }) =>
    $height &&
    `
      height: ${$height};
    `}
`;

export const InputArea = styled.div`
  .title {
    font-size: 14px;
    font-weight: 700;
    color: #333333;
  }
  .input {
    display: flex;
    border: 1px solid #c1c1c1;
    height: 48px;
    border-radius: 8px;
    overflow: hidden;
    transition: 0.4s;
    width: 100%;
  }
  .input .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid #c1c1c1;
    color: #c1c1c1;
    width: 50px;
    transition: 0.4s;
  }
  .input .input_field {
    border: none;
    outline: none;
    transition: 0.4s;
    color: #333333;
    font-weight: 700;
  }
  .input .input_field::placeholder {
    font-size: 16px;
    font-weight: 400;
    transition: 0.4s;
  }
  .input:hover {
    border: 1px solid #333333;
  }
  .input:hover .icon {
    border-right: 1px solid #333333;
    color: #333333;
  }
  .input:hover .input_field::placeholder {
    color: #333333;
  }
  .input:focus-within {
    border: 1px solid #333333;
  }
  .input:focus-within .icon {
    border-right: 1px solid #333333;
    color: #333333;
  }
  .input:focus-within .input_field::placeholder {
    color: #333333;
  }
  .input.active {
    border: 1px solid #333333;
  }

  .input.active .icon {
    border-right: 1px solid #333333;
    color: #333333;
  }
  .input.active .input_field::placeholder {
    color: #333333;
  }
  .input.errors {
    border: 1px solid #bc0000;
  }
  .input.errors .icon {
    border-right: 1px solid #bc0000;
    color: #bc0000;
  }
  .error-message {
    color: #bc0000;
    font-size: 12px;
    font-weight: 700;
  }
`;
