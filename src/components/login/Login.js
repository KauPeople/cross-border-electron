import React from 'react'
import { Input } from 'antd'
import { UserOutlined } from '@ant-design/icons'

const Login = () => {
  return (
    <>
      <Input size="large" placeholder="large size" prefix={<UserOutlined />} />
      <br />
      <br />
      <Input size="large" placeholder="large size" prefix={<UserOutlined />} />
    </>
  )
}
export default Login
