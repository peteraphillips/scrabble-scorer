import { useState, useEffect } from 'react'
import './App.css'
import Tile from './components/tile'
import TileSelector from './components/tileSelector'
import Board from './components/board'
import Score from './components/score'

function App() {

  //  states
  const [playedTile, setPlayedTile] = useState('')
  const [tiles, setTiles] = useState([])
  const [score, setScore] = useState(0)

  // ** TODO: change this to an object which contains the score of each tile
  const alphabet = [
    {
      letter:'A',
      score: '1'
    }, 
    {
      letter:'B',
      score: '3'
    }, 
    {
      letter:'C',
      score: '3'
    }, 
    {
      letter:'D',
      score: '2'
    }, 
    {
      letter:'E',
      score: '1'
    }, 
    {
      letter:'F',
      score: '4'
    }, 
    {
      letter:'G',
      score: '2'
    }, 
    {
      letter:'H',
      score: '4'
    }, 
    {
      letter:'I',
      score: '1'
    }, 
    {
      letter:'J',
      score: '8'
    }, 
    {
      letter:'K',
      score: '5'
    }, 
    {
      letter:'L',
      score: '1'
    }, 
    {
      letter:'M',
      score: '3'
    }, 
    {
      letter:'N',
      score: '1'
    }, 
    {
      letter:'O',
      score: '1'
    }, 
    {
      letter:'P',
      score: '3'
    }, 
    {
      letter:'Q',
      score: '10'
    }, 
    {
      letter:'R',
      score: '1'
    }, 
    {
      letter:'S',
      score: '1'
    },
    {
      letter:'T',
      score: '1'
    }, 
    {
      letter:'U',
      score: '1'
    }, 
    {
      letter:'V',
      score: '4'
    }, 
    {
      letter:'W',
      score: '4'
    }, 
    {
      letter:'X',
      score: '8'
    }, 
    {
      letter:'Y',
      score: '4'
    }, 
    {
      letter:'Z',
      score: '10'
    },
    {
      letter:'',
      score: '0'
    }, 
  ]

  // handle event when a tile from the selector is clicked to update state
  const handleClickTile = (event) => {
    event.preventDefault()

    console.log('tile clicked', event.target.innerText)

    const alphabetObject = alphabet.filter(object => object.letter === event.target.innerText)

    const letterObject = {
      letter: event.target.innerText,
      score: alphabetObject[0].score
    }

    setPlayedTile(letterObject)

    tiles.push(letterObject)

    setTiles(tiles)

    setScore(score+parseInt(alphabetObject[0].score))

  }

  const handleClickReset = (event) => {
    event.preventDefault()

    console.log('reset clicked')

    setTiles([])
    setPlayedTile('')

    setScore(0)

  }


  return (
    <main>
      <Score score={score}/>
      <Board tiles={tiles}/>
      <form className='buttonContainer' onSubmit={handleClickReset}>
        <button type="submit" >Reset</button>
      </form>
      <TileSelector>
        {alphabet.map(letter => 
        <div key={letter.letter} onClick={handleClickTile}>
          <Tile letter={letter.letter} score={letter.score}/>
        </div>
        )}
      </TileSelector>
    </main>
  )
}

export default App