import React from 'react'

const UserPage = (props) => {
  const { location } = props
  const isLogined = true
  return (
    <>
      {/* {location.pathname !== '/login/find_password' && location.pathname !== '/login/join' && <Login {...props} />}
      {location.pathname === '/login/join' && <Join {...props} />}
      {location.pathname === '/login/find_password' && <FindPassword {...props} />} */}
    </>
  )
}

export default UserPage
