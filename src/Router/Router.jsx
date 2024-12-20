import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Components/Layout/Layout';
import Home from '../Pages/Home'
const Router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {path: '/', element: <Home /> }
    ]
  }
])

export default Router;