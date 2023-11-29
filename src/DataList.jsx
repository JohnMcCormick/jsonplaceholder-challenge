import React from 'react'
import DataListItem from './DataListItem'

const DataList = ({ routeData }) => {
    return (
        <ul>
            {routeData.map((data, index) => (
                <DataListItem
                    key={index}
                    data={data}
                />
            ))}
        </ul>
    )
}

export default DataList