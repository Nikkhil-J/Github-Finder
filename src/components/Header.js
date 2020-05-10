import React from 'react'
import {Link} from 'react-router-dom'
import {BsPieChartFill} from 'react-icons/bs'

function Header() {
    return (
        <div>
            <header  className="headerclass">
            <Link to="/home"><BsPieChartFill className="heading-icon" color="white"  size="1.8rem"/></Link> GitFetch - Github User Finder
            <div style={{ cursor: 'pointer'}}>
                <Link className="linkClass" to="/form">Users</Link> | <Link className="linkClass" to="/about">About</Link>
            </div>
            </header>            
        </div>
    )
}


export default Header
