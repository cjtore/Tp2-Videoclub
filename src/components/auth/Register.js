import React, {useState} from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import './Auth.css'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { configFirebase } from '../..';


function Register() {
  const navigate = useNavigate();
  const [ user, setUser ] = useState({username:"",email:"", password:"", confirmPassword:""});
  const auth = getAuth(configFirebase);
  const [error, setError] = useState(null);

  const validatePassword = () => {
    let isValid = true;
    if (user.password !== '' && user.confirmPassword !== ''){
      if (user.password !== user.confirmPassword) {
        isValid = false
        alert('Passwords does not match')
      }
    }
    return isValid
  }

  const setUsername = (onchangeEvent) => {
    console.log(onchangeEvent.target.value)
    setUser({
      ...user,
      username: onchangeEvent.target.value
    })
  }
  const setEmail = (onchangeEvent) => {
    console.log(onchangeEvent.target.value)
    setUser({
      ...user,
      email: onchangeEvent.target.value
    })
  }
  const setPassword = (onchangeEvent) => {
    console.log(onchangeEvent.target.value)
    setUser({
      ...user,
      password: onchangeEvent.target.value
    })
  }
  const setConfirmPassword = (onchangeEvent) => {
    console.log(onchangeEvent.target.value)
    setUser({
      ...user,
      confirmPassword: onchangeEvent.target.value
    })
  }
  const customRegister = () => {
    
    if(validatePassword()) {
      createUserWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        navigate("/")
        // ...
      })
      .catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage)
    });
    }
  }
  return (
    <form>
      <label htmlFor="username">Nombre Usuario</label>
      <input onChange={setUsername} type="text" id="username" name="username" /><br/>
      <label htmlFor="email">Email</label>
      <input onChange={setEmail} type="email" id="email" name="email" /><br/>
      <label htmlFor="password">Contraseña</label>
      <input onChange={setPassword} type="password" id="password" name="password"/><br/>
      <label htmlFor="confirmPassword">Confirmar Contraseña</label>
      <input onChange={setConfirmPassword} type="password" id="confirmPassword" name="confirmPassword"/><br/>
      
      <button type="button" onClick={customRegister}>
              Registrarse
      </button>
      
  </form>
  )
}

export default Register