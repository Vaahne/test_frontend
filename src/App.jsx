import { Route,Routes } from 'react-router-dom'
import AcceptData from './pages/AcceptData'
import Greeting from './pages/Greeting'
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<AcceptData/>} />
        <Route path="/greeting" element={<Greeting/>}/>
      </Routes>
    </>
  )
}

export default App
