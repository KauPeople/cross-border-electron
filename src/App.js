import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { ProductPage, LoginPage, RegisterPage } from './pages'
import './App.css'
import 'antd/dist/antd.css'

function App() {
  return (
    <Switch>
      <Route exact path="/products" component={ProductPage} />
      <Route exact path="/registers" component={RegisterPage} />
      <Route exact path="/login" component={LoginPage} />
      <Redirect path="*" to="/products" />
    </Switch>
  )
}

export default App
