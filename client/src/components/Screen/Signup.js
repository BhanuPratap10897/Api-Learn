import React,{useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import M from 'materialize-css'

const Signup =() =>{
    const history = useHistory()
    const [name,setName] = useState("")
    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("")
    const PostData = () =>{
        fetch("/signup",{
            method: "post",
            headers:{
                "content.Type":"application/json"
            },
            body:JSON.stringify({
                name:name,
                password:password,
                email:email
            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.error){
                M.toast({html: data.error,classes:"#c62828 red darken-3"})
            }
            else{
                M.toast({html: data.message,classes:"#43a047 green darken-1"})
                history.push('/signin')
            }
        })
    }

    return(
        <div className="mycard">
            <div className="card auth-card input-field">
                <h2>Coder's Coffee</h2>
                <input
                    type="text"
                    placeholder="Name"
                    value = {name}
                    onChange = {(e)=>setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="E-mail"
                    value = {email}
                    onChange = {(e)=>setEmail(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Password"
                    value = {password}
                    onChange = {(e)=>setPassword(e.target.value)}
                />
                 <button className="btn waves-effect waves-light #b39ddb deep-purple lighten-3"
                 onClick={()=>PostData()}
                 >
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