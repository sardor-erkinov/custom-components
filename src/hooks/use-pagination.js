import { useCallback, useMemo, useState } from "react"

const pageSizes = [
    {
        id: 1,
        size: 5,
        suffix: "tadan"
    },
    {
        id: 2,
        size: 10,
        suffix: "tadan"
    },
    {
        id: 3,
        size: 20,
        suffix: "tadan"
    },
    {
        id: 4,
        size: 50,
        suffix: "tadan"
    },
    {
        id: 5,
        size: 100,
        suffix: "tadan"
    },
]

export const usePagination = ({ total = 0, pageSize: size = pageSizes[0].size, sizes = pageSizes }) => {

    const [pageSize, setPageSize] = useState(size)
    const [currentPage, setCurrentPage] = useState(total > 0 ? 1 : 0)

    const pageCount = useMemo(() => Math.ceil(total / pageSize), [pageSize, total])

    const getPaginationProps = useCallback((
        prevPage,
        nextPage,
        clickPage
    ) => {

        const clickNextPage = (props) => {
            if (nextPage) {
                nextPage(props)
            } else {
                if (pageCount > currentPage) {
                    setCurrentPage((curPage) => curPage + 1)
                }
            }
        }

        const clickPrevPage = (props) => {
            if (prevPage) {
                prevPage(props)
            } else {
                if (currentPage > 1) {
                    setCurrentPage((curPage) => curPage - 1)
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
            clickNextPage,
            clickPrevPage
        };

    }, [currentPage, pageCount])

    const getPageSizeProps = useCallback((onChangePageSize = undefined) => {
        /**
         * @param {number} size A positive or negative number
        */

        const changePageSize = (size) => {
            setPageSize(size)
            setCurrentPage(1)
            onChangePageSize && onChangePageSize()
        }

        return {
            onChange: changePageSize,
            sizes,
            pageSize
        }

    }, [pageSize, sizes])

    return {
        getPaginationProps,
        getPageSizeProps,
        pageCount,
        currentPage,
        pageSize,
        sizes
    }

}