import React from 'react'

function Navbar() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand px-3" style={{borderStyle:"Solid",borderColor:"#000",borderRadious:"5px",fontWeight:"bold" ,backgroundColor:"#fa98b4"}} href="/">Pensieve</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <div class="ms-auto">
            <ul class="navbar-nav">
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li class="nav-item">
                <a class="nav-link active" href="/login">Login</a>
                </li>
                <li class="nav-item">
                <a class="nav-link active" href="/signup">SignUp</a>
                </li>
            </ul>
            </div>
            </div>
        </div>
        </nav>
    </div>
  )
}

export default Navbar