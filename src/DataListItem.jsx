import React from 'react'

const DataListItem = ({ data }) => {
    return (
        <li>{JSON.stringify(data)}</li>
    )
}

export default DataListItem