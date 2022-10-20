import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<Dashboard></Dashboard>} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App
