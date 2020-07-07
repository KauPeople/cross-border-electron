import React from 'react'
import { Login, Join, FindPassword } from '../components/login'

const UserPage = (props) => {
  const { location } = props
  console.log(props)
  const isLogined = true
  return (
    <>
      {location.pathname !== '/login/find_password' && location.pathname !== '/login/join' && <Login {...props} />}
      {location.pathname === '/login/join' && <Join {...props} />}
      {location.pathname === '/login/find_password' && <FindPassword {...props} />}
    </>
  )
}

export default UserPage
