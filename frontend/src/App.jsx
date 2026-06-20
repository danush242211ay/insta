import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import CreatePost from './components/CreatePost'
import Feed from './components/Feed'

const App = () => {
  return (
      <Routes>
        <Route path='/create-post' element={<CreatePost />} />
        <Route path='/feed' element={<Feed />} />
      </Routes>
  )
}

export default App