import React from "react";
import { ButtonPrimary, ButtonSecondary } from "./styled";

const Button = ({ $type, $width, disabled, $height, ...rest }) => {
  switch ($type) {
    case "primary":
      return (
        <ButtonPrimary
          $width={$width}
          disabled={disabled}
          $height={$height}
          {...rest}
        />
      );
    case "secondary":
      return (
        <ButtonSecondary
          $width={$width}
          disabled={disabled}
          $height={$height}
          {...rest}
        />
      );
    default:
      return (
        <ButtonPrimary $width={$width} disabled={disabled} $height={$height} />
      );
  }
};

export default Button;
