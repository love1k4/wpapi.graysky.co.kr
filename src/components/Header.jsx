import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav style={{height: '140px'}}>
      <ul>
        <strong><Link style={{color:'white'}} to='/'>흐린하늘's Develog</Link></strong>
      </ul>
      <ul>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>
    </nav>
  )
}

