import React from 'react'

const HeaderButton = ({ routeName, selectedRoute, setSelectedRoute }) => {
    return (
        <button
            className={selectedRoute === routeName ? 'selected' : null}
            onClick={() => setSelectedRoute(routeName)}
        >
            {routeName}
        </button>
    )
}

export default HeaderButton