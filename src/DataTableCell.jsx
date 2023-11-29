import React from 'react'

const DataTableCell = ({ value }) => {
    return (
        <td>{JSON.stringify(value)}</td>
    )
}

export default DataTableCell