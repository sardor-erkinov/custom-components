import { useCallback, useMemo, useState } from "react"

export const usePagination = ({ total = 0, pageSize: size = 0 }) => {

    const [pageSize, setPageSize] = useState(size)
    const [currentPage, setCurrentPage] = useState(total > 0 ? 1 : 0)

    const pageCount = useMemo(() => Math.ceil(total / pageSize), [pageSize, total])

    const getPaginationProps = useCallback(({
        clickNextPage: nextPage,
        clickPageNum: clickPage
    }) => {
        const clickNextPage = (props) => {
            if (nextPage) {
                nextPage(props)
            } else {
                if (pageCount > currentPage) {
                    setCurrentPage((curPage) => curPage + 1)
                }
            }
        }

        /**
         * @param {number} num A positive or negative number
         */

        const clickPageNum = (num) => {
            clickPage ? clickPage(num) : setCurrentPage(num)
        }

        return {
            setCurrentPage,
            clickPageNum,
            clickNextPage
        };

    }, [currentPage, pageCount])

    const getPageSizeProps = useCallback(({
        pageSize: sizeOfPage,
        setPageSize: setSizeOfPage,
        onChangePageSize
    }) => {

        /**
         * @param {number} size A positive or negative number
        */

        const changePageSize = (size) => {
            setSizeOfPage ? setSizeOfPage(size) : setPageSize(size)
            onChangePageSize && onChangePageSize()
        }

        return {
            pageSize: sizeOfPage ?? pageSize,
            onChange: changePageSize
        }

    }, [pageSize])

    return {
        getPaginationProps,
        getPageSizeProps,
        pageCount,
        currentPage
    }

}