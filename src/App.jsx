import { useState } from "react";
import Board from './Board';


export default function Game(){
    const [history,setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    function handlePlay(nextSquares){
        const nextHistory = [...history.slice(0,currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(nextMove){
        setCurrentMove(nextMove);
    }

    const moves = history.map((squares,move) => {
        let description;
        if(move > 0 ){
            description = 'Go to move #' + move;
        }
        else{
            description = 'Go to game start';
        }
        return(
            <li key={move}>
                <button
                    className={`move-button ${currentMove === move ? "is-current" : ""}`}
                    onClick={() => jumpTo(move)}
                    aria-current={currentMove === move ? "step" : undefined}
                >
                    <span className="move-number" aria-hidden="true">
                        {String(move).padStart(2, "0")}
                    </span>
                    <span>{description}</span>
                </button>
            </li>
        )
    });

    return(
        <div className="app-shell">
            <div className="ambient ambient-one" aria-hidden="true" />
            <div className="ambient ambient-two" aria-hidden="true" />

            <main className="game-card">
                <header className="game-header">
                    <div className="eyebrow">
                        <span className="eyebrow-dot" aria-hidden="true" />
                        Classic strategy game
                    </div>
                    <h1>Tic Tac Toe</h1>
                    <p>Three in a row. Simple rules, timeless rivalry.</p>
                </header>

                <div className="game">
                    <section className="game-board" aria-label="Tic tac toe board">
                        <Board xIsNext = {xIsNext} squares = {currentSquares} onPlay={handlePlay} />
                    </section>

                    <aside className="game-info" aria-label="Move history">
                        <div className="history-header">
                            <div>
                                <span className="section-label">Timeline</span>
                                <h2>Move history</h2>
                            </div>
                            <span className="move-count">{currentMove} / 9</span>
                        </div>
                        <ol>{moves}</ol>
                    </aside>
                </div>

                <footer className="game-footer">
                    <span><strong>X</strong> goes first</span>
                    <span className="footer-divider" aria-hidden="true" />
                    <span>Pick any square to play</span>
                </footer>
            </main>
        </div>
    );
}
