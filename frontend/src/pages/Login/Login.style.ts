import styled from 'styled-components/native'

export const Container = styled.View`
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px;
  padding-top: 50px;
`

export const Logo = styled.Image`
  width: 100%;
  height: 140px;
  margin-bottom: 20px;
`

export const RegisterText = styled.Text`
  text-align: center;
  font-size: 15;
  margin-top: 10px;
  margin-bottom: 10px;
  font-weight: 500;
  color: #abb8c3;
`

export const NavButtonText = styled.Text`
  text-align: center;
  font-size: 18;
  font-weight: 500;
  color: #2e64e5;
`

export const NavButton = styled.TouchableOpacity`
  margin-top: 15px;
`

export const ForgotButton = styled.TouchableOpacity`
  margin-top: 15px;
`
