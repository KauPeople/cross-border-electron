import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Sidebar />
      {children}
    </>
  )
}

export default Layout
