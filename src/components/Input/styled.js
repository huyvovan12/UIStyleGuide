import { Input } from "antd";
import styled from "styled-components";

export const InputArea = styled.div`
  display: flex;
  border: 1px solid #c1c1c1;
  height: 48px;
  border-radius: 8px;
  overflow: hidden;
  transition: 0.4s;
  width: 100%;

  :hover {
    border: 1px solid #333333;
  }

  :focus-within {
    border: 1px solid #333333;
  }

  ${({ $active }) =>
    $active &&
    `
    border: 1px solid #333333;
    `}
  ${({ $error }) =>
    $error &&
    `
    border: 1px solid #bc0000;
    :hover {
      border: 1px solid #bc0000;
    }
    :focus-within {
      border: 1px solid #bc0000;
    }
    `}
`;

export const IconArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #c1c1c1;
  color: #c1c1c1;
  width: 50px;
  transition: 0.4s;

  ${InputArea}:hover & {
    border-right: 1px solid #333333;
    color: #333333;
  }

  ${InputArea}:focus-within & {
    border-right: 1px solid #333333;
    color: #333333;
  }

  ${({ $active }) =>
    $active &&
    `
    border-right: 1px solid #333333;
    color: #333333;
   
    `}
  ${({ $error }) =>
    $error &&
    `
    border-right: 1px solid #bc0000 !important;
    color: #bc0000 !important;
    `}
`;

export const Title = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #333333;
  margin-bottom: 3px;
`;

export const InputBase = styled(Input)`
  border: none;
  outline: none;
  transition: 0.4s;
  color: #333333;
  font-weight: 700;
  ::placeholder {
    font-size: 16px;
    font-weight: 400;
    transition: 0.4s;
  }

  ${InputArea}:hover &::placeholder {
    color: #333333;
  }

  ${InputArea}:focus-within &::placeholder {
    color: #333333;
  }

  ${InputArea}.active &::placeholder {
    color: #333333;
  }
  ${({ $active }) =>
    $active &&
    `::placeholder{
      color: #333333;
    }
    `}
`;

export const ErrorMessage = styled.div`
  color: #bc0000;
  font-size: 12px;
  font-weight: 700;
`;
