import React from 'react'

const Home =() =>{
    return(
        <div className="home">
            <div className="card home-card">
                <h5>Tahir</h5>
                <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aW1nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"/>
                </div>
                <div className="card-content">
                    <i className="material-icons" style={{color:"red"}}>favorite</i>
                    <h6>title</h6>
                    <p>this is amazing post</p>
                    <input type="text" placeholder="add a comment"/>
                </div>
            </div>

            <div className="card home-card">
                <h5>Saurav</h5>
                <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aW1nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"/>
                </div>
                <div className="card-content">
                    <i className="material-icons" style={{color:"red"}}>favorite</i>
                    <h6>title</h6>
                    <p>this is amazing post</p>
                    <input type="text" placeholder="add a comment"/>
                </div>
            </div>
        </div>
    )
}

export default Home