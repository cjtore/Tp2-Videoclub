import React from 'react'
import { Link } from 'react-router-dom'
import './Auth.css'

function Register() {
  return (
    <form>
      <label for="username">Nombre Usuario</label>
      <input type="text" id="username" name="uname" /><br/>
      <label for="email">Email</label>
      <input type="email" id="email" name="email" /><br/>
      <label for="password">Contraseña</label>
      <input type="password" id="password" name="pass"/><br/>
      <label for="password">Confirmar Contraseña</label>
      <input type="password" id="password" name="pass"/><br/>
      <Link to="/">
          <button type="button">
              Registrarse
          </button>
      </Link>
  </form>
  )
}

export default Register