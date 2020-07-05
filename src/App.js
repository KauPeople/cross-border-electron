import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { ProductManagePage, UserPage, ProductRegisterPage } from './pages'
import './App.css'
import 'antd/dist/antd.css'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ProductManagePage} />
      <Route exact path="/registers" component={ProductRegisterPage} />
      <Route exact path="/users" component={UserPage} />
      <Redirect path="*" to="/" />
    </Switch>
  )
}

export default App
