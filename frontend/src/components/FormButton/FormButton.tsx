import React from "react";
import { StyledText, StyledTouchableOpacity } from "./FormButton.style";

const FormButton = ({ buttonTitle}) => (
  <StyledTouchableOpacity>
    <StyledText>{buttonTitle}</StyledText>
  </StyledTouchableOpacity>
);

export default FormButton;
