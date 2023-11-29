import React from 'react'
import DataTableCell from './DataTableCell.jsx'

const DataTableRow = ({ rowData }) => {
    return (
        <tr>
            {Object.entries(rowData).map(([key, value]) => (
                <DataTableCell
                    key={key}
                    value={value}
                />
            ))}
        </tr>
    )
}

export default DataTableRow