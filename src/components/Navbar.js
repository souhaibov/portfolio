import React from 'react'
import "../style/Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
        {/* <div className='dark_mode'>
        <label>
            <input type="checkbox"></input>
            <span className="check"></span>
        </label> */}
        <div className='souhaib'>
                Souhaib
        </div>
        {/* </div> */}
        <div className='nav'>
            <ul>
            
        
            <li>
                <a href="/">
                Home
                </a>
            </li>
            <li>
            <a href="#about" >
            About
          </a>
            </li>
            <li>
            <a href="#skills">
                Skills
                </a>
            </li>
            
            <li>
            <a href="#my_hobbies">
                Hobbies
                </a>
            </li>
             <li>
             <a href="#contact-form">
                Contact
                </a>
            </li>
            
        </ul>
        </div>
    </div>
  )
}

export default Navbar