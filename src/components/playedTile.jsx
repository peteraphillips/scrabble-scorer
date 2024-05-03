import Tile from "./tile"

const PlayedTile = (props) => {

    return (
        <div>
            <Tile letter={props.letter} score={props.score} />
        </div>
    )
}

export default PlayedTile