import React from 'react'
import './Footer.scss'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className='site-footer'>
      <div className='container'>
        <div className='footer-top'>
          <div className='logo'>
            <span className='logo-mark'>▶</span>
            <span className='logo-text'>Cine<em>Vault</em></span>
          </div>

          <ul className='footer-links'>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className='divider' />

        <p className='footer-bottom'>
          &copy; {year} CineVault. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer