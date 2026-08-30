import Square from './Square';

export default function Board({xIsNext, squares, onPlay, onRestart}) {
    function handleClick(i){
        if(calculateWinner(squares) || squares[i]){
            return;
        }

        const nextSquares = squares.slice();

        if(xIsNext){
            nextSquares[i] = "X";
        }
        else{
            nextSquares[i] = "O";
        }
        onPlay(nextSquares)
    }

    const winner = calculateWinner(squares);
    let status;
    if(winner){
        status = "Winner: " + winner; 
    }
    else{
        status = "Next player: " + (xIsNext ? "X" : "O");
    }

    return(
        <div className="board-panel">
            <div className={`status ${winner ? "status--winner" : ""}`}>
                <div className="status-message">
                    <span className="status-icon" aria-hidden="true">{winner ? "★" : ""}</span>
                    <span>{status}</span>
                </div>
                {winner && (
                    <button className="restart-button" type="button" onClick={onRestart}>
                        Play again
                    </button>
                )}
            </div>

            <div className="board" aria-label="3 by 3 game grid">
                <div className="board-row">
                    <Square value={squares[0]} onSquareClick={ () => handleClick(0) } />
                    <Square value={squares[1]} onSquareClick={ () => handleClick(1) } />
                    <Square value={squares[2]} onSquareClick={ () => handleClick(2) } />
                </div>
                <div className="board-row">
                    <Square value={squares[3]} onSquareClick={ () => handleClick(3) } />
                    <Square value={squares[4]} onSquareClick={ () => handleClick(4) } />
                    <Square value={squares[5]} onSquareClick={ () => handleClick(5) } />
                </div>
                <div className="board-row">
                    <Square value={squares[6]} onSquareClick={ () => handleClick(6) } />
                    <Square value={squares[7]} onSquareClick={ () => handleClick(7) } />
                    <Square value={squares[8]} onSquareClick={ () => handleClick(8) } />
                </div>
            </div>
        </div>
    );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
