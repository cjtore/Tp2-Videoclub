import React from 'react'
import { BrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import './App.css';
import NavBar from './components/container/NavBar';
import router from './routes';



function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
