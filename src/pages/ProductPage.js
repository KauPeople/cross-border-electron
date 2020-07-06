import React from 'react'
import Layout from '../components/layout/Layout'

const ProductPage = (props) => {
  const { history } = props
  return (
    <>
      <Layout history={history}>
        <div>productmanagepage</div>
      </Layout>
    </>
  )
}

export default ProductPage
