import React from 'react'
import logo from '../images/logo.svg'

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className='nav-links'>
          <a href="/#">Notify Me</a>
          <a href="/#">Coming Soon</a>
        </div>
      </nav>
    </header>
  )
}

export default Header
