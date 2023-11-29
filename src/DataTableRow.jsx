import React from 'react'
import DataTableRowColumn from './DataTableRowColumn'

const DataTableRow = ({ data }) => {
    const entries = Object.entries(data);
    return (
        <tr>
            {entries.map(entry => (
                <DataTableRowColumn data={entry[1]} />
            ))}
        </tr>
    )
}

export default DataTableRow