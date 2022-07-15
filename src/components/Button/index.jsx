import { Button as antdButton } from "antd";
import styled from "styled-components";

const Button = ({ size, primary, secondary, disabled, children, ...props }) => {
  const buttonTheme = () => {
    if (primary) {
      return `
                background: #FF0000;
                color: #FFFFFF;
                border: none;
                border-radius: 8px;
                :hover {
                    color: #FFFFFF;
                    background: #FF4D4D;
                }
                :visited {
                    color: #FFFFFF;
                    background: black;
                }
                :focus {
                    color: #FFFFFF;
                    background: #C20000;
                }
                :disabled {
                    color: #FFFFFF;
                    background: #999999;
                }
            `;
    }
    if (secondary) {
      return `
                  background: #FFF;
                  color: #FF0000;
                  border: 1px solid #FF0000;
                  border-radius: 8px;
                  :hover {
                      color: #FF0000;
                      border: 2px solid #FF0000;
                      background: #FFF;
                      transition: none;
                  }
                  :visited {
                      color: #FF0000;
                      border: 3px solid #FF0000;
                  }
                  :focus {
                      color: #FF0000;
                      background: #FFF;
                      border: 3px solid #FF0000;
                  }
                  :disabled {
                      color: #999999;
                      background: #FFF;
                      border: 1px solid #999999;
                  }
              `;
    }
  };

  const StyledButton = styled(antdButton)`
    font-weight: 700;
    font-size: 16px;
    height: 40px;
    width: ${size ? size : "90%"};
    ${buttonTheme};
  `;
  return (
    <StyledButton {...props} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;
