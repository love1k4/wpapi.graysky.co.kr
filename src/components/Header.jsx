import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav>
      <ul>
        <strong><Link className='logo' to='/'>WordPress React</Link></strong>
      </ul>
      <ul>
        <li><Link className='header-nav-item' to='/about'>About</Link></li>
        <li><Link className='header-nav-item' to='/blog'>Blog</Link></li>
        <li><Link className='header-nav-item' to='/contact'>Contact</Link></li>
      </ul>
    </nav>
  )
}

