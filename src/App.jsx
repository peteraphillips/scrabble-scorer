import { useState, useEffect } from 'react'
import Tile from './components/tile'
import './App.css'

function App() {

  const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState({x: null, y: null})
  }

  return (
    <>
      <div>
        <Tile letter='A' />
      </div>
    </>
  )
}

export default App
