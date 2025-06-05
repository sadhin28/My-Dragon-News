
import { createBrowserRouter } from 'react-router-dom';
import Home from '../layouts/Home';

const router =createBrowserRouter([
    {
        path:'/',
        element:<Home></Home>
    },
    {
        path:'news',
        element:<h1>News Layout</h1>
    },
    {
        path:'auth',
        element:<h1>Auth Layout</h1>
    },
    {
        path:'*',
        element:<h1>Error</h1>
    }
])

export default router