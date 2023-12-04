
export const Prev = ({ onClick = () => { } }) => {
    return (
        <button onClick={onClick} className="prev pagination-btn">
            &#60;
        </button>
    )
}