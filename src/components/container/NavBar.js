import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
  const links = [{link:'Home', path: '/'},{link:'Login', path: '/login'},{link:'Registro', path:'/register'}]
  return (
    <nav className='navbar'>
        <div className='navbar__title'>
          VideoClub
            <li className='navbar__list'>
                {links.map( ({link, path}) =>  <li className='navbar__item'><Link to={path}>{link}</Link></li> )}
            </li>
        </div>
    </nav>
  )
}

export default NavBar