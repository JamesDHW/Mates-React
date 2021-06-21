import React from "react";
import { StyleSheet } from "react-native";
import Login from "./src/pages/Login/Login";
import {Switch, Route} from "react-router-dom";
import {Registration} from "./src/pages/Registration/Registration";

// import Amplify from "aws-amplify";
// import awsconfig from "./aws-exports";
// Amplify.configure(awsconfig);

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={Registration} />
      <Route exact path="/login" component={Login} />
    </Switch>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
