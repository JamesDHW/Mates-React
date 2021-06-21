import React, { FC, useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import FormInput from "../../components/FormInput";
import FormButton from "../../components/FormButton/FormButton";
import SocialButton from "../../components/SocialButton";

export const Registration: FC = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../../../assets/friends.png")} />
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
      <FormButton buttonTitle="Register" onPress={() => null} />

    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    paddingTop: 50,
  },
  logo: {
    height: 200,
    width: 300,
    marginVertical: 20,
    resizeMode: "cover",
  },
  text: {
    fontSize: 28,
    marginBottom: 10,
    fontWeight: "500",
    color: "#051d5f",
  },
  textRegister: {
    fontSize: 15,
    marginVertical: 10,
    fontWeight: "500",
    color: "#abb8c3",
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 15,
  },
  newAccountButton: {
    marginBottom: 36,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#2e64e5",
  },
});
