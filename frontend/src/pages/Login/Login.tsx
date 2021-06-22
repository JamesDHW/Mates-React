import React, { FC, useState } from 'react'
import FormInput from '../../components/FormInput'
import FormButton from '../../components/FormButton/FormButton'
import { SocialButton } from '../../components/SocialButton'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../../App'
import { useNavigation } from '@react-navigation/native'
import {
  Container,
  ForgotButton,
  Logo,
  NavButton,
  NavButtonText,
  RegisterText
} from './Login.style'

interface Props {}

type loginNavProp = StackNavigationProp<RootStackParamList, 'Login'>

export const Login: FC<Props> = () => {
  const { navigate } = useNavigation<loginNavProp>()
  const [email, setEmail] = useState<string>()
  const [password, setPassword] = useState<string>()
  return (
    <Container>
      <Logo source={require('../../../assets/friends.png')} />
      <FormInput
        labelValue={email}
        onChangeText={(userEmail: string) => setEmail(userEmail)}
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <FormInput
        labelValue={password}
        onChangeText={(userPassword: string) => setPassword(userPassword)}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
      />
      <FormButton buttonTitle={'SIGN IN'} onPress={() => null} />

      <ForgotButton onPress={() => {}}>
        <NavButtonText>FORGOT PASSWORD?</NavButtonText>
      </ForgotButton>

      <RegisterText> ────── OR ──────</RegisterText>

      <SocialButton
        buttonTitle="SIGN IN USING GOOGLE"
        btnType="google"
        color="#de4d41"
        backgroundColor="#f5e7ea"
        onPress={() => navigate('Register')}
      />
      <NavButton onPress={() => {}}>
        <NavButtonText>NEW TO MATES? JOIN HERE.</NavButtonText>
      </NavButton>
    </Container>
  )
}
