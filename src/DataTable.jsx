import React from 'react'
import DataTableRow from './DataTableRow'

const DataTable = ({ routeData }) => {
    return (
        <table>
            <tbody>
                {routeData.map(rowData => (
                    <DataTableRow
                        key={rowData.id}
                        rowData={rowData}
                    />
                ))}
            </tbody>
        </table>
    )
}

export default DataTable