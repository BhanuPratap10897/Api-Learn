import React from 'react'
import { Link } from 'react-router-dom'

const Signin =() =>{
    return(
        <div className="mycard">
            <div className="card auth-card input-field">
                <h2>Coder's Coffee</h2>
                <input
                    type="text"
                    placeholder="E-mail"
                />
                <input
                    type="text"
                    placeholder="Password"
                />
                 <button className="btn waves-effect waves-light #b39ddb deep-purple lighten-3">
                    Login
                </button>
                <h5>
                    <Link to='/signup'>Dont have an Account ?</Link>
                </h5>
            </div>
        </div>
    )
}

export default Signin