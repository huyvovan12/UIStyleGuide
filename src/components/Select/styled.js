import styled from "styled-components";
import { Select } from "antd";

export const CustomSelect = styled(Select)`
  :hover .antd-select {
    border-color: #333333 !important;
  }
`;

const { Option } = Select;

export const CustomOption = styled(Option)``;
