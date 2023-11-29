import { useState, useEffect } from 'react'
import Header from './Header'
import DataList from './DataList'

const routes = [
  { id: 0, route: 'users' },
  { id: 1, route: 'posts' },
  { id: 2, route: 'comments' }
];

function App() {
  const [selectedRoute, setSelectedRoute] = useState(0)
  const [routeData, setRouteData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const { route } = routes.find(route => route.id === selectedRoute)
      const data = await fetch(`https://jsonplaceholder.typicode.com/${route}`);
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
