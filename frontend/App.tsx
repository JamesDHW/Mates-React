import React from 'react'
import { Login } from './src/pages/Login/Login'
import { Registration } from './src/pages/Registration/Registration'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import 'react-native-gesture-handler'

const Stack = createStackNavigator()

export type RootStackParamList = {
  Login: undefined
  Register: undefined
}

// import Amplify from "aws-amplify";
// import awsconfig from "./aws-exports";
// Amplify.configure(awsconfig);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Registration} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
