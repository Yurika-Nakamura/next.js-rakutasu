'use client'
import MainContainer from '../../../../components/Container/MainContainer'
import SubHeader from '../../../../components/Header/SubHeader'
import LoginContainer from '../../../../components/Login/LoginContainer'

export default function Page() {
  return (
    <MainContainer>
      <SubHeader />
      <LoginContainer />
    </MainContainer>
  )
}