import styled from "styled-components";
import { Button as antdButton } from "antd";

export const ButtonBase = styled(antdButton)`
  font-weight: 700;
  font-size: 16px;
  height: 40px;
  ${({ $height }) =>
    $height &&
    `
      height: ${$height};
    `}
  ${({ $width }) =>
    $width &&
    `
      width: ${$width};
    `}
`;

export const ButtonPrimary = styled(ButtonBase)`
  background: #ff0000;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  :hover {
    color: #ffffff;
    background: #ff4d4d;
  }
  :visited {
    color: #ffffff;
    background: black;
  }
  :focus {
    color: #ffffff;
    background: #c20000;
  }
  :disabled {
    color: #ffffff;
    background: #999999;
  }
`;

export const ButtonSecondary = styled(ButtonBase)`
  background: #fff;
  color: #ff0000;
  border: 1px solid #ff0000;
  border-radius: 8px;
  transition: 0.2s;
  :hover {
    color: #ff0000;
    border: 2px solid #ff0000;
    background: #fff;
  }
  :visited {
    color: #ff0000;
    border: 3px solid #ff0000;
  }
  :focus {
    color: #ff0000;
    background: #fff;
    border: 3px solid #ff0000;
  }
  :disabled {
    color: #999999;
    background: #fff;
    border: 1px solid #999999;
  }
`;
