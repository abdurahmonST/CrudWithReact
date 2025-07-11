import React from 'react'
import { SidebarWrapper } from './Sidebar.styled'
import { NavLink } from 'react-router'

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <h1 className='text-3xl mb-5'>Sidebar</h1>
      <ul>
        <li>
          <NavLink to="/users">Users</NavLink>
        </li>
        <li>
          <NavLink to="/products">Products</NavLink>
        </li>
        <li>
          <NavLink to="/tasks">Tasks</NavLink>
        </li>
      </ul>
    </SidebarWrapper>
  )
}

export default Sidebar
