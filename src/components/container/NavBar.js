import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
  const links = [{link:'Home', path: '/'},{link:'Login', path: '/login'},{link:'Registro', path:'/register'}]
  return (
    <nav className='navbar'>
        <div className='navbar__title'>
          <h1>Pelis4All</h1>
            <ol className='navbar__list'>
                {links.map( ({link, path},index) =>  <li key={index} className='navbar__item'><Link to={path}>{link}</Link></li> )}
            </ol>
        </div>
    </nav>
  )
}

export default NavBar