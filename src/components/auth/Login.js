import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { configFirebase } from '../..';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [ user, setUser ] = useState({email:"", password:""})
  // const userState = useState({email:"", password:""})
  // userState[0] === user
  // userState[1](newState) === setUser(newState)
  const auth = getAuth(configFirebase);
  
  const customLogin = () => {
    signInWithEmailAndPassword(auth, user.email, user.password)
    .then((userCredential) => {
     // Signed in 
      const user = userCredential.user;
      console.log(userCredential)
      navigate("/")
      // ...
    })
    .catch((error) => {
      console.log("here is the error", error)
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
    });

  }

  const handleAuth=() =>{
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(result => console.log(`${result.user} ha iniciado sesión`))
      .catch(error => console.log(`Èrror ${error.code}: ${error.message}`));
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
  return (
    <form>
            <h1>Login</h1>

            <label htmlFor="email">Email</label>
            <input onChange={setEmail} type="text" id="email" name="email" /><br/>
            <label htmlFor="password">Contraseña</label>
            <input onChange={setPassword} type="password" id="password" name="password"/><br/>

                <button type="button" onClick={customLogin}> 
                    Iniciar session
                </button>

           
            <br/><em>Sino tambien puedes</em>
             <button type="button" onClick={handleAuth}>
                Entrar con Google
              </button>
    </form>
  )
}

export default Login