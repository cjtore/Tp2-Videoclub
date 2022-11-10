import { createBrowserRouter } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import HeaderLayout from "./components/container/HeaderLayout";
import MovieDetail, { movieDetailLoader } from "./components/movie/MovieDetail";
import MovieList, { movieLoader } from "./components/movie/MovieList";

const router = createBrowserRouter([
    {
        element: <HeaderLayout />,
        children: [

            {
                path: '/',
                element: <MovieList />,
                loader: movieLoader,
            },
            {
                path: '/login',
                element: <Login />,
                loader: movieLoader,
            },
            {
                path: '/register',
                element: <Register />,
                loader: movieLoader,
            },
            {
            path: 'movie/:movieId',
            element: <MovieDetail />,
            loader: movieDetailLoader,
            }]
    }
  ]);

export default router