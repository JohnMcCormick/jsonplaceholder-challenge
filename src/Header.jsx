import React from 'react'

const Header = ({ routes, selectedRoute, setSelectedRoute }) => {

    const handleClickTab = (id) => {
        setSelectedRoute(id)
    }

    return (
        <header>
            {routes.map(({route, id}) => (
                <button
                    key={id}
                    style={{ backgroundColor: selectedRoute == id ? '#000' : '#fff' }}
                    onClick={() => handleClickTab(id)}
                >
                    <p style={{ color: selectedRoute == id ? '#fff' : '#000' }}>
                        {route}
                    </p>
                </button>
            ))}
        </header>
    )
}

export default Header