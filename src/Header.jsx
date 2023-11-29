import React from 'react'
import HeaderButton from './HeaderButton'

const Header = ({ routes, selectedRoute, setSelectedRoute }) => {

    return (
        <header>
            {routes.map((routeName) => (
                <HeaderButton
                    key={routeName}
                    routeName={routeName}
                    selectedRoute={selectedRoute}
                    setSelectedRoute={setSelectedRoute}
                />
            ))}
        </header>
    )
}

export default Header