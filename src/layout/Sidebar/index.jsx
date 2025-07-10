import React from 'react'
import { SidebarWrapper } from './Sidebar.styled'
import { NavLink } from 'react-router'

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <h1 className='text-3xl mb-5'>Sidebar</h1>
      <ul>
        <li>
          <NavLink to="/dashboard/posts">Posts</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/products">Products</NavLink>
        </li>
      </ul>
    </SidebarWrapper>
  )
}

export default Sidebar
