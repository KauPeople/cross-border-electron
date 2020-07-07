import React from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'

const Input = styled.input`
  width: 300px;
  height: 40px;
  margin-top: 30px;
`

const Aspan = styled.span`
  cursor: pointer;
  color: blue;
  margin-right: 260px;
`
const SubmitButton = styled.button`
  width: 300px;
  height: 40px;
  margin-top: 30px;
  cursor: pointer;
`

const FindPassword = (props) => {
  const { history } = props
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = (data) => console.log(data)
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '100vh',
            alignItems: 'center'
          }}
        >
          준플렉스
          <Input name="id" ref={register} size="large" placeholder="아이디" />
          <Input type="password" name="password" ref={register} size="large" placeholder="비밀번호" />
          <SubmitButton type="submit">로그인</SubmitButton>
          <span>
            <Aspan onClick={() => history.push('/login')}>로그인</Aspan>
          </span>
        </div>
      </form>
    </>
  )
}
export default FindPassword
