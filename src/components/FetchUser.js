import React from 'react'

function FetchUser(props) {
    console.log(props.data)
    return (
        <div style={divStyle}>
                <div style={{fontWeight:'400'}}>Login Name: <span style={spanStyle}>{props.data.login}</span></div>
                <div style={{fontWeight:'400'}}>User Id : <span style={spanStyle}>{props.data.id}</span></div>
                <div style={{fontWeight:'400'}}>Public Repos: <span style={spanStyle}>{props.data.public_repos}</span> </div>
        </div>
    )
}

const spanStyle = {
    color: 'red',
    font: 'Helvetica'
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



