import React, { FC } from 'react'
import { StyledText, StyledTouchableOpacity } from './FormButton.style'

const FormButton: FC<{buttonTitle: string}> = ({ buttonTitle, ...rest }) => (
  <StyledTouchableOpacity {...rest}>
    <StyledText>{buttonTitle}</StyledText>
  </StyledTouchableOpacity>
)

export default FormButton
