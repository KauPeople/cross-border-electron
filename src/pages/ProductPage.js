import React from 'react'
import { Table, Pagination } from 'antd'
import Layout from '../components/layout/Layout'

const ProductPage = (props) => {
  const dataSource = [
    {
      id: '1',
      productName: 'Mike',
      krPrice: 32,
      createdAt: '10 Downing Street'
    },
    {
      id: '2',
      productName: 'Mike',
      krPrice: 32,
      createdAt: '10 Downing Street'
    },
    {
      id: '3',
      productName: 'Mike',
      krPrice: 32,
      createdAt: '10 Downing Street'
    },
    {
      id: '4',
      productName: 'Mike',
      krPrice: 32,
      createdAt: '10 Downing Street'
    },
    {
      id: '5',
      productName: 'Mike',
      krPrice: 32,
      createdAt: '10 Downing Street'
    },
    {
      id: '6',
      productName: 'Mike',
      krPrice: 32,
      createdAt: '10 Downing Street'
    },
    {
      id: '7',
      productName: 'Mike',
      krPrice: 32,
      createdAt: '10 Downing Street'
    },
    {
      id: '12',
      productName: 'Mike',
      krPrice: 32,
      createdAt: '10 Downing Street'
    },
    {
      id: '8',
      productName: 'Mike',
      krPrice: 32,
      createdAt: '10 Downing Street'
    },
    {
      id: '9',
      productName: 'Mike',
      krPrice: 32,
      createdAt: '10 Downing Street'
    },
    {
      id: '10',
      productName: 'Mike',
      krPrice: 32,
      createdAt: '10 Downing Street'
    },
    {
      id: '11',
      productName: 'Mike',
      krPrice: 32,
      createdAt: '10 Downing Street'
    }
  ]

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      sorter: (a, b) => a.id - b.id
    },
    {
      title: '상품 명',
      dataIndex: 'productName',
      key: 'productName'
    },
    {
      title: '가격',
      dataIndex: 'krPrice',
      key: 'krPrice',
      sorter: (a, b) => a.krPrice - b.krPrice
    },
    {
      title: '생성일',
      dataIndex: 'createdAt',
      key: 'createdAt',
      sorter: (a, b) => a.createdAt - b.createdAt
    }
  ]

  const { history } = props
  const tableOnChange = (e) => {
    console.log(e)
  }

  return (
    <>
      <Layout history={history}>
        <Table
          onRow={(record) => {
            return {
              onClick: () => history.push(`/products/${record.id}`)
            }
          }}
          onHeaderRow={(column) => {
            return {
              onClick: () => {} // click header row
            }
          }}
          dataSource={dataSource}
          rowKey={(record) => record.id}
          columns={columns}
          pagination={<Pagination defaultCurrent={1} total={50} />}
          onChange={tableOnChange}
        />
      </Layout>
    </>
  )
}

export default ProductPage
