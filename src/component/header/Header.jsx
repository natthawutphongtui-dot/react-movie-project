import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.scss'

function Header() {
  return (
    <header className='site-header'>
      <div className='container'>
        <div className='nav-wrapper'>
          <NavLink to="/" className='logo'>
            <span className='logo-mark'>▶</span>
            <span className='logo-text'>Cine<em>Vault</em></span>
          </NavLink>

          <nav>
            <ul className='nav-links'>
              <li>
                <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="about" className={({ isActive }) => isActive ? 'active' : ''}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="contact" className={({ isActive }) => isActive ? 'active' : ''}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header