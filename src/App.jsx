import { useState, useEffect } from 'react'
import Header from './Header'
import DataTable from './DataTable'

const API_URL = 'https://jsonplaceholder.typicode.com'
const routes = ['users', 'posts', 'comments'];

function App() {
    const [selectedRoute, setSelectedRoute] = useState('users')
    const [routeData, setRouteData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetch(`${API_URL}/${selectedRoute}`);
                const routeData = await data.json();
                setRouteData(routeData);
            } catch (err) {
                console.error(err)
            }
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
            <DataTable
                routeData={routeData}
            />
        </>
    )
}

export default App
