export default function Square({value,onSquareClick}){
    const valueClass = value ? `square--${value.toLowerCase()}` : "";

    return (
        <button
            className={`square ${valueClass}`}
            onClick={onSquareClick}
            aria-label={value ? `Square marked ${value}` : "Empty square"}
        >
            {value}
        </button>
    );
}
