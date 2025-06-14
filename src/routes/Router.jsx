
import { createBrowserRouter, Navigate } from 'react-router-dom';
import Home from '../layouts/Home';
import CategoryNews from '../components/Page/CategoryNews';
import AuthLayout from '../layouts/AuthLayout';
import Login from '../components/Page/Login';
import Register from '../components/Page/Register';
import DetailsNews from '../components/Page/DetailsNews';
import PrivateRoute from './PrivateRoute';

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
                element:<CategoryNews></CategoryNews>,
                loader:({params})=>fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            }
        ]
    },
    {
            path:'/news/:id',
            element:<PrivateRoute><DetailsNews></DetailsNews></PrivateRoute>,
            loader:({params})=>fetch(` https://openapi.programming-hero.com/api/news/${params.id}`)
    },

    {
        path:'news',
        element:<h1>News Layout</h1>
    },
    {
        path:'auth',
        element:<AuthLayout></AuthLayout>,
        children:[
            {
                path:'/auth/login',
                element:<Login></Login>
            },
            {
                path:'/auth/register',
                element:<Register></Register>
            }
        ]
    },
    {
        path:'*',
        element:<h1>Error</h1>
    }
])

export default router