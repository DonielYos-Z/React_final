import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className='container-fluid' style={{ background: "skyblue" }}>
            <div className='container d-flex justify-content-between align-items-center'>
                <div className='logo col-auto'>
                    <h3>Logo</h3>
                </div>
                <nav className='col-auto'>
                    <ul className='list-inline d-flex h-100 ms-3'>
                        <li className='list-inline-item'><Link to="/" >Home</Link></li>
                        <li className='list-inline-item'><Link to="/about" >About</Link></li>
                        <li className='list-inline-item'><Link to="/movies" >Movies</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
