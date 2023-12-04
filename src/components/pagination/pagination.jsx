import clsx from "clsx"
import { Prev } from "./prev"
import { Next } from "./next"
import { PageSize } from "./page-size"
import "./style.css"

export const Pagination = ({ pageCount = 0, currentPage = 0 }) => {

    return (
        <ul className="pagination-list">
            {Array.from(pageCount).map((item, index) => {
                <li key={item} className={clsx("pagination-item", { "active-page": currentPage === index + 1 })}>
                    {index + 1}
                </li>
            })}
        </ul>
    )
}

Pagination.Prev = Prev
Pagination.Next = Next
Pagination.PageSize = PageSize 