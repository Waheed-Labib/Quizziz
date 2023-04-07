import { createBrowserRouter } from "react-router-dom";
import Topics from "../components/Topics/Topics";
import Statistics from "../components/Statistics/Statistics";
import Blogs from "../components/Blogs/Blogs";
import Main from "../layouts/Main";
import Home from "../components/Home/Home";
import ErrorElement from "../components/ErrorElement/ErrorElement";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
                element: <Home></Home>
            },
            {
                path: '/home',
                loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
                element: <Home></Home>
            },
            {
                path: '/topics',
                loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
                element: <Topics></Topics>
            },

            {
                path: '/statistics',
                element: <Statistics></Statistics>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            }
        ],

    },
    {
        path: '*',
        element: <ErrorElement></ErrorElement>
    }
])