import styled from 'styled-components/native'

export const InputContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 50;
  margin: 5px;
  border-radius: 3;
  border-width: 1;
  background-color: '#fff';
`
export const Icon = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  border-right-width: 1;
`

export const Input = styled.TextInput`
  margin: 10px;
  width: 100%;
  font-size: 16;
  color: '#333';
  justify-content: 'center';
  align-items: 'center';
`
