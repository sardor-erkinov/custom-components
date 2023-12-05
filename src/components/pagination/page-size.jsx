
export const PageSize = ({ onChange, pageSize, sizes = [] }) => {

    return (
        <select value={pageSize} onChange={(e) => {
            onChange(Number(e.target.value));
        }}>
            {sizes.map((pageSize) => (
                <option key={pageSize.id} value={pageSize.size}>
                    {pageSize.size} {pageSize.suffix}
                </option>
            ))}
        </select>
    )
}