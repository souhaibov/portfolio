import React from 'react'
import "../style/Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='souhaib'>
                Souhaib
        </div>
        <div>
            <ul>
            
        
            <li>
                <a href="Home">
                Home
                </a>
            </li>
            <li>
            <a href="About">
                About
                </a>
            </li>
            <li>
            <a href="Skills">
                Skills
                </a>
            </li>
            <li>
            <a href="Education">
                Education
                </a>
            </li>
           
            <li>
            <a href="Experience">
                Experience
                </a>
            </li>
            <li>
            <a href="Hobbies">
                Hobbies
                </a>
            </li>
             <li>
             <a href="Contact">
                Contact
                </a>
            </li>
            
        </ul>
        </div>
    </div>
  )
}

export default Navbar