import React from 'react'

const HeaderButton = ({ routeName, selectedRoute, setSelectedRoute }) => {
    return (
        <button
            style={{ backgroundColor: selectedRoute == routeName ? '#000' : '#fff' }}
            onClick={() => setSelectedRoute(routeName)}
        >
            <p style={{ color: selectedRoute == routeName ? '#fff' : '#000' }}>
                {routeName}
            </p>
        </button>
    )
}

export default HeaderButton