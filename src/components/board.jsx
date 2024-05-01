import Square from "./square"
import Tile from "./tile"

function renderSquare (i, [tileX, tileY]) {
    const x = i % 10
    const y = Math.floor(i/10)
    const isTileHere = tileX === x && tileY === y
    const piece = isTileHere ? <Tile letter="A" /> : null

    return <Square>{piece}</Square>
}

const Board = (props) => {

    const squares = []
    for (let i=0; i<10; i++) {
        squares.push(renderSquare(i, props.tilePosition))
    }

    return (
        <div className="board">
            {squares}
        </div>
    )
}

export default Board 