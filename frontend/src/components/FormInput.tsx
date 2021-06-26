import React, { FC } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Icon, Input, InputContainer } from './FormInput.style'

interface Props {
  labelValue: string
  placeholderText: string
  iconType: string
}

export const FormInput: FC<Props> = ({
  labelValue,
  placeholderText,
  iconType
}) => {
  return (
    <InputContainer>
      <Icon>
        <AntDesign name={iconType} size={25} color="#666" />
      </Icon>
      <Input
        value={labelValue}
        numberOfLines={1}
        placeholder={placeholderText}
        placeholderTextColor="#666"
      />
    </InputContainer>
  )
}

export default FormInput
