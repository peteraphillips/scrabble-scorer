const Score = (props) => {


    return (
        <div className="scoreContainer">
            <h2>Score</h2>
            <h2>{props.score}</h2>
        </div>
    )
}

export default Score