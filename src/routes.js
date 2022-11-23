import { createBrowserRouter } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import HeaderLayout from "./components/container/HeaderLayout";
import MovieBuy from "./components/movie/MovieBuy";
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
            },
            {
                path: '/register',
                element: <Register />,
            },
            {
            path: 'movie/:movieId',
            element: <MovieDetail />,
            loader: movieDetailLoader,
            },
            {
                path: 'checkout/:movieId',
                element: <MovieBuy />,
                loader: movieDetailLoader,
            }]
    }
  ]);

export default router