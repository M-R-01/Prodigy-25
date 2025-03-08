import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home.jsx'
import './App.css'

function App() {

  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
    </Routes>
  )
}

export default App
