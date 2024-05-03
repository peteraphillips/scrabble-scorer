const Tile = (props) => {

    var tile = 
    <div className="tile-container" >
        <div className="tile">
            <h1 className="tileLetter" >{props.letter}</h1>
            <p className="tileScore" >{props.score}</p>
        </div>
    </div>    
    
    return (
        tile
    )
}

export default Tile