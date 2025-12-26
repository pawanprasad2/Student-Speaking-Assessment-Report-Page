import React from 'react'
import ReportPage from './pages/Reportpage'
import{Routes,Route} from "react-router-dom"
function App() {
  return (
  <>
  <Routes>
    <Route path="/" element={<ReportPage/>} />
  </Routes>
  
  </>
  )
}

export default App