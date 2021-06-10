import React from 'react'
import { Link } from 'react-router-dom'

const Signup =() =>{
    return(
        <div className="mycard">
            <div className="card auth-card input-field">
                <h2>Coder's Coffee</h2>
                <input
                    type="text"
                    placeholder="Name"
                />
                <input
                    type="text"
                    placeholder="E-mail"
                />
                <input
                    type="text"
                    placeholder="Password"
                />
                 <button className="btn waves-effect waves-light #b39ddb deep-purple lighten-3">
                    Signup
                </button>
                <h5>
                    <Link to='/signin'>Already have an Account ?</Link>
                </h5>
            </div>
        </div>
    )
}

export default Signup