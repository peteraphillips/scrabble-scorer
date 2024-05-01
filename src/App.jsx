import { useState, useEffect } from 'react'
import { useDrag } from 'react-dnd'
import './App.css'
import Board from './components/board'

function App() {

  return (
    <>
      <Board tilePosition={[0, 0]} />
    </>
  )
}

export default App