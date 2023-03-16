import Square from "./Square";

function Board() {
    const squares = [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
    ];
    
    return (
        <>
            <div className="board-row">
                <Square squareNumber={squares[0]} />
                <Square squareNumber={squares[1]} />
                <Square squareNumber={squares[2]} />
            </div>
            <div className="board-row">
                <Square squareNumber={squares[3]} />
                <Square squareNumber={squares[4]} />
                <Square squareNumber={squares[5]} />
            </div>
            <div className="board-row">
                <Square squareNumber={squares[6]} />
                <Square squareNumber={squares[7]} />
                <Square squareNumber={squares[8]} />
            </div>
        </>
    );
}

export default Board;
