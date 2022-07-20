import styled from "styled-components";
import { Select } from "antd";

export const CustomSelect = styled(Select)`
  display: flex;
  width: 90%;
  z-index: 1;
  > div {
    border-radius: 8px !important;
  }
  ${({ $width }) =>
    $width &&
    `
    width: ${$width};
  `}
  ${({ $error }) =>
    $error &&
    `
    :hover div{
      border: 1px solid #bc0000 !important;
    }
     div{
      border: 1px solid #bc0000 !important;
      box-shadow: none !important;
    }
  `}
  ${({ $height }) =>
    $height &&
    `
     div{
      height: ${$height} !important;
    }
     div span{
       display: flex;
       align-items: center;
    }
  `}
`;

export const Container = styled.div``;

const { Option } = Select;

export const CustomOption = styled(Option)``;

export const ErrorMessage = styled.div`
  color: #bc0000;
  font-size: 12px;
  font-weight: 700;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 700;
  color: #333333;
  margin-bottom: 3px;
  cursor: pointer;
`;
