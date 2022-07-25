import React, { useEffect, useState } from "react"
import "antd/dist/antd.min.css"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { ProjectLayout } from "./pages/Layout/ProjectLayout"
import Login from "./pages/Login/Components/Login"
import MainPage from "./pages/MainPage/MainPage"
function App() {
  // console.log('21', data);

  return (
    <BrowserRouter>
      <ProjectLayout>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/main" element={<MainPage />} />
        </Routes>
      </ProjectLayout>
    </BrowserRouter>
  )
}

export default App
