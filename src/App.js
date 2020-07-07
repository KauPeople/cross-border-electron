import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { ProductPage, LoginPage, RegisterPage } from './pages'
import './App.css'
import 'antd/dist/antd.css'

function App() {
  return (
    <Switch>
      <Route path="/products" component={ProductPage} />
      <Route path="/registers" component={RegisterPage} />
      <Route path="/login" component={LoginPage} />
      <Redirect path="*" to="/products" />
      {/* <Route path="/mypage" component={MyPage}>
          {isLoggin ? null : <Redirect to="/user/login" />}
        </Route> */}
    </Switch>
  )
}

export default App
