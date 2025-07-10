import React from 'react'
import Main from './layout/Main'
import PostsPage from './pages/PostsPage'
import { Route, Routes } from 'react-router'

const ProductsPage = React.lazy(() => import('./pages/ProductsPage'))

const App = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Main/>}>
        <Route path="products" element={<ProductsPage />} />
        <Route path="posts" element={<PostsPage />} />
      </Route>
    </Routes>
  )
}

export default App
