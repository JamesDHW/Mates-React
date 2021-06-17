import React from "react";
import { StyleSheet } from "react-native";
import LoginScreen from "./src/pages/LoginPage";
// import Amplify from "aws-amplify";
// import awsconfig from "./aws-exports";
// Amplify.configure(awsconfig);

export default function App() {
  return <LoginScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
