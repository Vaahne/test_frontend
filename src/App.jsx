import { Route,Routes } from 'react-router-dom'
import AcceptData from './pages/AcceptData'
import './App.css'

function App() {

  return (
    <>
      {/* <h1>Good Morning</h1> */}
      <Routes>
        <Route path="/" element={<AcceptData/>} />
      </Routes>
    </>
  )
}

export default App
