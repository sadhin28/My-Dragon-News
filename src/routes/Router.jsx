
import { createBrowserRouter, Navigate } from 'react-router-dom';
import Home from '../layouts/Home';

const router =createBrowserRouter([
    {
        path:'/',
        element:<Home></Home>,
        children:[ 
            {
                path:'',
                element:<Navigate to={"/category/01"}></Navigate>
            },
            {
                path:'/category/:id',
                element:<h2>This is category</h2>
            }
        ]
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