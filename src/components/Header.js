import React from 'react'
import {Link} from 'react-router-dom'
function Header() {
    return (
        <div>
            <header  className="headerclass">
            Github User Finder
            <div style={{textDecoration:'underline' , cursor: 'pointer'}}>
                <Link className="linkClass"  to="/home">Home</Link>|
                <Link className="linkClass" to="/form">Users</Link>|
                <Link className="linkClass" to="/">Events</Link>|
                <Link className="linkClass" to="/about">About</Link>
            </div>
            </header>            
        </div>
    )
}


export default Header
