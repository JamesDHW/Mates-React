import React from 'react'
import Login from './src/pages/Login/Login'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { Registration } from './src/pages/Registration/Registration'

// import Amplify from "aws-amplify";
// import awsconfig from "./aws-exports";
// Amplify.configure(awsconfig);

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/register" component={Registration} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  )
}
