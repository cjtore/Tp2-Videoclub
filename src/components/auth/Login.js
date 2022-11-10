import React from 'react'
import { Link } from 'react-router-dom'
import './Auth.css'

function Login() {
  return (
    <form>
            <label for="username">Nombre Usuario</label>
            <input type="text" id="username" name="uname" /><br/>
            <label for="password">Contraseña</label>
            <input type="password" id="password" name="pass"/><br/>
            <Link to="/">
                <button type="button">
                    Iniciar session
                </button>
            </Link>
            <Link to="/register">
                <button type="button">
                    Registrarse
                </button>
            </Link>
    </form>
  )
}

export default Login