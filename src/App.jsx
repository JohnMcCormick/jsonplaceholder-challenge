import { useState, useEffect } from 'react'
import Header from './Header'
import DataList from './DataList'

const routes = ['users', 'posts', 'comments'];

function App() {
    const [selectedRoute, setSelectedRoute] = useState('users')
    const [routeData, setRouteData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(`https://jsonplaceholder.typicode.com/${selectedRoute}`);
            const routeData = await data.json();
            setRouteData(routeData);
        }
        fetchData();
    }, [selectedRoute])


    return (
        <>
            <Header
                routes={routes}
                selectedRoute={selectedRoute}
                setSelectedRoute={setSelectedRoute}
            />
            <DataList
                routeData={routeData}
            />
        </>
    )
}

export default App
