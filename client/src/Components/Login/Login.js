import React from 'react';
import { Link } from "react-router-dom"


function Login(props) {
  return (
    <div className='background'>
      <div className='modal_form'>
      <button className='button button-icon'></button>
      <input className='auth' type='email' name='email' placeholder='Email'/>
      <input className='auth' type='password' name='password' placeholder='Password'/>
      <button className='button button-entrance'>Войти</button>
      <div>У вас ещё нет аккаунта? <Link className='link' to="/signUp">Зарегистрироваться</Link></div>
      </div>
    </div>
    
  );
}

export default Login;
