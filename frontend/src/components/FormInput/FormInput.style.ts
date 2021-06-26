import styled from 'styled-components'
import { View, TextInput } from 'react-native'

export const InputContainer = styled(View)`
  margin-top: 5;
  margin-bottom: 10;
  width: '100%';
  height: 70;
  border-color: '#ccc';
  border-radius: 3;
  border-width: 1;
  flex-direction: 'row';
  align-items: 'center';
  background-color: '#fff';
`
export const Icon = styled(View)`
  padding: 10;
  height: '100%';
  justify-content: 'center';
  align-items: 'center';
  border-right-color: '#ccc';
  border-right-width: 1;
  width: 50;
`

export const Input = styled(TextInput)`
  padding: 10;
  flex: 1;
  font-size: 16;
  color: '#333';
  justify-content: 'center';
  align-items: 'center';
`
