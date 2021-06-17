import React from "react";
import { StyledText, StyledTouchableOpacity } from "./FormButton.style";

const FormButton = ({ buttonTitle: string, ...rest }) => (
  <StyledTouchableOpacity {...rest}>
    <StyledText>{buttonTitle}</StyledText>
  </StyledTouchableOpacity>
);

export default FormButton;
