import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import About from "../pages/About";
import PostIdPage from '../pages/PostIdPage';
import Posts from "../pages/Posts";

const AppRouter = () => {
  return (
    <Routes>
        <Route path="/posts" element={<Posts />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts/:id" element={<PostIdPage />} />
        <Route
          path="*"
          element={<Navigate to="/about" replace />}
        />
      </Routes>
  )
}

export default AppRouter