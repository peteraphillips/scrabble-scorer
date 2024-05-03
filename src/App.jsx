import { useState, useEffect } from 'react'
import './App.css'
import Tile from './components/tile'
import TileSelector from './components/tileSelector'
import Board from './components/board'
import Square from './components/square'

function App() {

  //  states
  const [playedTile, setPlayedTile] = useState('')
  const [tiles, setTiles] = useState([])

  // ** TODO: change this to an object which contains the score of each tile
  const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']


  // handle event when a tile from the selector is clicked to update state
  const handleClickTile = (event) => {
    event.preventDefault()

    console.log('tile clicked', event.target.innerText)

    const letter = event.target.innerText

    setPlayedTile(letter)

    tiles.push(letter)

    setTiles(tiles)

  }

  return (
    <main>
      <Board tiles={tiles} />
      <TileSelector>
        {alphabet.map(letter => 
        <div key={letter} onClick={handleClickTile}>
          <Tile letter={letter} />
        </div>
        )}
      </TileSelector>
    </main>
  )
}

export default App