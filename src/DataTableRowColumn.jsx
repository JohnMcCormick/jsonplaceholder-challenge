import React from 'react'

const DataTableRowColumn = ({ data }) => {
    return (
        <td>{JSON.stringify(data)}</td>
    )
}

export default DataTableRowColumn