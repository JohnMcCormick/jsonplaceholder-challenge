import React from 'react'
import DataTableRow from './DataTableRow'

const DataTable = ({ routeData }) => {
    return (
        <table>
            <tbody>
                {routeData.map((data, index) => (
                    <DataTableRow
                        key={index}
                        data={data}
                    />
                ))}
            </tbody>
        </table>
    )
}

export default DataTable