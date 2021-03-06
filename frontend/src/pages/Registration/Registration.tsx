import React, { FC, useState } from 'react'
import FormInput from '../../components/FormInput/FormInput'
import FormButton from '../../components/FormButton/FormButton'
import { Container, Logo, NavButton, NavButtonText } from '../Login/Login.style'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../../App'

type registrationNavProp = StackNavigationProp<RootStackParamList, 'Register'>

export const Registration: FC = () => {
  const { navigate } = useNavigation<registrationNavProp>()
  const [email, setEmail] = useState<string>()
  const [password, setPassword] = useState<string>()
  return (
    <Container>
      <Logo source={require('../../../assets/mates.png')} />
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
      <FormInput
        labelValue={email}
        onChangeText={(userEmail: string) => setEmail(userEmail)}
        placeholderText="First Name"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <FormInput
        labelValue={email}
        onChangeText={(userEmail: string) => setEmail(userEmail)}
        placeholderText="Last Name"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <FormButton buttonTitle="Register" />
      <NavButton onPress={() => navigate('Login')}>
        <NavButtonText>Login</NavButtonText>
      </NavButton>
    </Container>
  )
}
