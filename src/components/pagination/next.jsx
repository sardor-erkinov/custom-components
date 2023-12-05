
export const Next = ({ onClick = () => { }, }) => {
    return (
        <button onClick={onClick} className="next pagination-btn">&#62;</button>
    )
}