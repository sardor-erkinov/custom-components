import { Prev } from "./prev"
import { Next } from "./next"
import { PageSize } from "./page-size"
import { PaginationList } from "./pagination-list"
import "./style.css"

export const Pagination = (props) => {
    return (
        <div {...props} />
    )
}


Pagination.Prev = Prev
Pagination.Next = Next
Pagination.PageSize = PageSize
Pagination.PaginationList = PaginationList 