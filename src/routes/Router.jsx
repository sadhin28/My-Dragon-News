
import { createBrowserRouter, Navigate } from 'react-router-dom';
import Home from '../layouts/Home';
import CategoryNews from '../components/Page/CategoryNews';
import AuthLayout from '../layouts/AuthLayout';
import Login from '../components/Page/Login';
import Register from '../components/Page/Register';
import DetailsNews from '../components/Page/DetailsNews';
import PrivateRoute from './PrivateRoute';
import AddPosts from '../components/Page/AddPosts';
import Members from '../components/Page/Members';
import About from '../components/Page/About';
import Addmembers from '../components/Page/Addmembers';
import NewMenbers from '../components/Page/NewMenbers';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
        children: [
            {
                path: '',
                element: <Navigate to={"/category/01"}></Navigate>
            },
            {
                path: '/category/:id',
                element: <CategoryNews></CategoryNews>,
                loader: () => fetch('https://my-dragonnews-server.onrender.com/posts')
            },
        ]
    },
    {
        path: '/news/:id',
        element: <PrivateRoute><DetailsNews></DetailsNews></PrivateRoute>,
        loader: ({ params }) => fetch(`https://my-dragonnews-server.onrender.com/posts/${params.id}`)
    },

    {
        path: 'news',
        element: <h1>News Layout</h1>
    },
    {
        path: 'auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/register',
                element: <Register></Register>
            },
            


        ]
    },
     {
        path:'/members',
        element:<Members></Members>,
        loader:()=>fetch('https://my-dragonnews-server.onrender.com/members')
        
   },
    {
        path: '/AddPost',
        element: <PrivateRoute><AddPosts></AddPosts></PrivateRoute>
    },

    {
        path: '/about',
        element: <About></About>
    },
    {
        path: '/AddMember',
        element: <PrivateRoute><NewMenbers></NewMenbers></PrivateRoute>
    },
    {
        path: '*',
        element: <h1>Error</h1>
    }
])

export default router