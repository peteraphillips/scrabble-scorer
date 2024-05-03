const Square = ({ children }) => {

     return (
        {children}
        ? <div className="square">

            {children}
        </div>
        : null
    )
    
}

export default Square