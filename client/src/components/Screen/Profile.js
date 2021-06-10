import React from 'react'

const Profile =() =>{
    return(
        <div style={{maxWidth:"550px", margin:"0px auto"}}>
            <div style={{
                display: "flex",
                justifyContent: "space-around",
                margin:"18px 0px",
                borderBottom:"1px Solid grey"
            }}>
                <div>
                    <img style={{width:"160px", height:"160px", borderRadius:"80px"}} 
                    src="https://cdn.dribbble.com/users/1041205/screenshots/3636353/dribbble.jpg?compress=1&resize=800x600"
                    />
                </div>
                <div>
                    <h4>Saurav Kumar</h4>
                    <div style={{
                        display:"flex",
                        width:"108%",
                        justifyContent:"space-between"
                    }}>
                        <h6>450 post</h6>
                        <h6>5B Followers</h6>
                        <h6>450 Following</h6>
                    </div>
                </div>
            </div>

            <div className="gellery">
                <img className="item" src="https://mosahay.info/images/mosahay%20team/Saurav.png"/>
                <img className="item" src="https://mosahay.info/images/mosahay%20team/Saurav.png"/>
                <img className="item" src="https://mosahay.info/images/mosahay%20team/Saurav.png"/>
                <img className="item" src="https://mosahay.info/images/mosahay%20team/Saurav.png"/>
                <img className="item" src="https://mosahay.info/images/mosahay%20team/Saurav.png"/>
                <img className="item" src="https://mosahay.info/images/mosahay%20team/Saurav.png"/>
                <img className="item" src="https://mosahay.info/images/mosahay%20team/Saurav.png"/>
                <img className="item" src="https://mosahay.info/images/mosahay%20team/Saurav.png"/>
                <img className="item" src="https://mosahay.info/images/mosahay%20team/Saurav.png"/>
            </div>
        </div>
    )
}

export default Profile