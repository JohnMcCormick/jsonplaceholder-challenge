import React from 'react'

const DataList = ({ routeData }) => {
    return (
        <main>
            <ul>
                {routeData.map(routeDataItem => (
                    <li>{JSON.stringify(routeDataItem)}</li>
                ))}
            </ul>
        </main>
    )
}

export default DataList