import React from "react";
import { ButtonPrimary, ButtonSecondary } from "./styled";

const Button = ({
  $type,
  $width = " 100%",
  disabled,
  $height,
  type,
  ...rest
}) => {
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
        <ButtonPrimary
          $width={$width}
          disabled={disabled}
          $height={$height}
          {...rest}
        />
      );
  }
};

export default Button;
