const Tile = (letter) => {

    var tile = 
    <div className="tile-container">
        <div className="tile">
            {letter.letter}
        </div>
    </div>    
    return (
        tile
    )
}

export default Tile