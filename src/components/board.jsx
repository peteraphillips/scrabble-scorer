import Tile from "./tile"

const Board = (props) => {

    return (
        <div className="board">
            {props.tiles.map(tile => 
            <div key={tile}>
                <Tile letter={tile} />
            </div>
            )}
        </div>
    )
}

export default Board