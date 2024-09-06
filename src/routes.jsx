import {createBrowserRouter } from 'react-router-dom'
import App from './pages/Home'
import ListUsers from './pages/Home/ListUsers'

const router = createBrowserRouter([


    {
        path: '/',
        element: <App />
    },

    {
        path: '/lista-de-usuarios',
        element: <ListUsers/>
    }

])

export default router