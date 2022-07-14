import styled from "styled-components";
import { Typography as antdTypo } from "antd";

const { Text } = antdTypo;

const Typography = ({ weight, size, color, children, ...props }) => {
  const StyledTypography = styled(Text)`
    font-size: ${size ? size : "16px"};
    color: ${color ? color : "white"};
    font-weight: ${weight ? weight : "700"};
  `;
  return <StyledTypography {...props}>{children}</StyledTypography>;
};

export default Typography;
