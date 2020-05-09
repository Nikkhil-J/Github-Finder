import React from 'react'
import avatar from './avatar.jpg'

function FetchUser(props) {

    return (
        <div style={divStyle} className="card">
                <div>
                    {
                        props.data.avatar_url != null ? <img src={props.data.avatar_url}></img>  : <img src={avatar}></img> 
                    }
                </div>
                <div className="flexclass" style={{fontWeight:'400'}}><span>Login Name:</span> <span className="spancard" style={spanStyle}>{props.data.login}</span></div>
                <div className="flexclass" style={{fontWeight:'400'}}>User Id: <span className="spancard" style={spanStyle}>{props.data.id}</span></div>
                <div className="flexclass" style={{fontWeight:'400'}}>Public Repos: <span className="spancard" style={spanStyle}>{props.data.public_repos}</span> </div>
                <div className="flexclass" style={{fontWeight:'400'}}>Followers: <span className="spancard" style={spanStyle}>{props.data.followers}</span> </div>

        </div>
    )
}

const spanStyle = {
    color: 'red',
    font: 'Helvetica',
}

const divStyle ={ 
    background: '#eee',
    textAlign: 'left',
    // display: 'flex',
    // justifyContent: 'space-around',
    fontSize: '30px',
    fontWeight: 'bold'
}



export default FetchUser



