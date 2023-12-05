import clsx from "clsx"

export const PaginationList = ({ pageCount = 0, currentPage = 0, onClick }) => {

    return (
        <ul className="pagination-list">
            {Array.from(Array(pageCount).keys()).map((item, index) => {
                return (<li key={item} onClick={() => { onClick(index + 1) }} className={clsx("pagination-item", { "active-page": currentPage === index + 1 })}>
                    {index + 1}
                </li>)
            })}
        </ul>
    )
}