import { createBrowserRouter } from "react-router-dom";
import Topics from "../components/Topics/Topics";
import Statistics from "../components/Statistics/Statistics";
import Blogs from "../components/Blogs/Blogs";
import Main from "../layouts/Main";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Topics></Topics>
            },
            {
                path: '/topics',
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
        ]
    }
])