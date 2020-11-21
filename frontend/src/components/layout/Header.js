import React from 'react';
import { NavLink } from 'react-router-dom'

class Header extends React.Component{
    render(){
        return(
            <header>
                <div className="container">
                    <div className="grids">
                        <h1>LANGAT KIPCHIRCHIR</h1>
                        <div className="web-links">
                            <ul>
                                <li>  <NavLink to="/">Home</NavLink> </li>
                                <li> <NavLink to="/about">About</NavLink> </li>
                                <li> <NavLink to="/projects">Projects</NavLink> </li>
                            </ul>
                        </div>

                        <div className="mobile-links">

                        <div class="menu-btn">
      <div class="btn-line"></div>
      <div class="btn-line"></div>
      <div class="btn-line"></div>
    </div>

    <nav class="menu">
      <div class="menu-branding">
        <div class="portrait"></div>
      </div>
      <ul class="menu-nav">
        <li class="nav-item current">
          <a href="index.html" class="nav-link">
            Home
          </a>
        </li>
        <li class="nav-item">
          <a href="about.html" class="nav-link">
            About Me
          </a>
        </li>
        <li class="nav-item">
          <a href="work.html" class="nav-link">
            My Work
          </a>
        </li>
        <li class="nav-item">
          <a href="contact.html" class="nav-link">
            How To Reach Me
          </a>
        </li>
      </ul>
    </nav>

                        </div>
                        
                    </div>
                </div>
            </header>

        )
    }
}
export default Header;