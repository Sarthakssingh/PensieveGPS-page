import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom'
import "./login.css"

function Login() {
  const navigate = useNavigate()

  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async (e) =>{
    e.preventDefault();
    const res = fetch('/login' ,{
      method : "POST",
      headers : {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        email,password
      })
    } );
    const data = (await res).json();
    if((await res).status === 400 || !data){
      window.alert("Invalid Login")
    }else{
      window.alert("Login Successful")

      navigate("/gpssummary")
    }
  }

  return (
    <div className='login-page shadow m-auto container mt-5 mb-5'>
      <div className="row">
        <form method='POST' class = "d-flex flex-column justify-content-center">
        <input 
        className='form-control' 
        type="email" 
        value={email}
        onChange={(e)=>{
          setEmail(e.target.value);
        }}
        placeholder='Email'
        id='inputEmail'

        />
        <input className='form-control' 
        type="password" 
        value={password}
        onChange={(e)=>{
          setPassword(e.target.value);
        }}
        placeholder='Password'
        id='inputPassword'
        />
        
        <button className="button-login" type='submit' onClick={ loginUser }>Log In</button>
        
        <a href="/signup" className="new-user">New User?</a>
        
        </form>
    </div>
    </div>
  )
}

export default Login