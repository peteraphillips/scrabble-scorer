const Tile = (props) => {

    var tile = 
    <div className="tile-container" >
        <div className="tile">
            {props.letter}
        </div>
    </div>    
    
    return (
        tile
    )
}

export default Tile