import './App.css'
import {BrowserRouter,Routes,Route } from "react-router-dom"
import Frist from './components/Frist'
import Second from './components/Second'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Frist/>} />
      <Route path='/1' element={<Second/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
