import PlayedTile from "./playedTile"

const Board = (props) => {
    
    return (
        <div className="board">
            {props.tiles.map(tile => 
            <div key={tile.letter} onClick={props.handleClickPlayedTile}>
                <PlayedTile letter={tile.letter} score={tile.score} />
            </div>
            )}
        </div>
    )
}

export default Board