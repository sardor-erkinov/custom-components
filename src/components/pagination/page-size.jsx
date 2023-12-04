
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

export const PageSize = ({ setSize, sizes = pageSizes }) => {

    return (
        <select defaultValue={sizes[0].size} onChange={(e) => {
            setSize(e.target.value);
            console.log(e.target.value)
        }}>
            {sizes.map((pageSize) => (
                <option key={pageSize.id} value={pageSize.size}>
                    {pageSize.size} {pageSize.suffix}
                </option>
            ))}
        </select>
    )
}