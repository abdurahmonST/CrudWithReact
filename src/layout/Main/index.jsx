import React from 'react'
import { MainWrapper, ContentSide } from './Main.styles'
import Sidebar from '../Sidebar'
import Navbar from '../Navbar'
import { Outlet } from 'react-router'

const Main = () => {
  return (
    <MainWrapper>
      <Sidebar />
      <ContentSide>
        <Navbar  />
        <Outlet />
      </ContentSide>
    </MainWrapper>
  )
}

export default Main
