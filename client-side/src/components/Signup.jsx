import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./signup.css"

function Signup() {
    const nevigate = useNavigate();

const [user, setUser] = useState({
    name:"",email:"",password:"",cpassword:""
});

let name ,value;
const handleInputs =(e) =>{
    console.log(e);
    name = e.target.name;
    value= e.target.value;
    setUser({...user,[name]:value});
    
};

const PostData = async(e) =>{
    e.preventDefault();

    const { name, email, password, cpassword } = user;
    const res = await fetch("/signup", {
        method:"POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body:JSON.stringify({
            name,email,password,cpassword
        })
    });
    const data = await res.json();
    if (data.status  === 422 && !data){
        window.alert("Invalid Registration");
        console.log("Invalid Registration");
    }else{
        window.alert("Registration Successful");
        console.log("Registration");
        nevigate("/login");
    }
}

  return (
    <div>
        <div className="container">
            <div className="row">
                <h1 className='signup-heading mt-3 mb-3 col-12'>SIGN UP</h1>
                <form method='POST' className='signup-form col-6  shadow m-auto'>
                    <div className="form-details">
                        <label htmlFor="name">
                        <i class="fa-sharp fa-solid fa-user icon"></i>
                        </label>
                        <input type="text"
                        name='name'
                        id='name'
                        autoComplete='off'
                        value={user.name}
                        onChange={handleInputs}
                        placeholder='Your Name' />
                    </div>
                    <div className="form-details">
                        <label htmlFor="email">
                        <i class="fa-sharp fa-solid fa-envelope icon"></i>
                        </label>
                        <input type="email"
                        name='email'
                        id='email'
                        autoComplete='off'
                        value={user.email}
                        onChange={handleInputs}
                        placeholder='Your Email' />
                    </div>
                    <div className="form-details">
                        <label htmlFor="password">
                        <i class="fa-sharp fa-solid fa-key icon"></i>
                        </label>
                        <input type="password"
                        name='password'
                        id='password'
                        autoComplete='off'
                        value={user.password}
                        onChange = {handleInputs}
                        placeholder='Your Password' />
                    </div>
                    <div className="form-details">
                        <label htmlFor="cpassword">
                        <i class="fa-sharp fa-solid fa-circle-check icon"></i>
                        </label>
                        <input type="password"
                        name='cpassword'
                        id='cpassword'
                        autoComplete='off'
                        value={user.cpassword}
                        onChange={handleInputs}
                        placeholder='Confirm Password' />
                    </div>
                    <button className='button-signup mb-3' type='submit' onClick={PostData}>SAVE DETAILS</button>
                </form>
            </div>

        </div>
    </div>
  )
}

export default Signup