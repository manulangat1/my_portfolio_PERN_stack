import React from 'react';
import { NavLink } from 'react-router-dom'

class Header extends React.Component{
    render(){
        return(
            <header>
                <div className="container">
                    <div className="grids">
                        <h1>LANGAT KIPCHIRCHIR</h1>
                        <ul>
                            <li>  <NavLink to="/">Home</NavLink> </li>
                            <li> <NavLink to="/about">About</NavLink> </li>
                            <li> <NavLink to="/projects">Projects</NavLink> </li>
                        </ul>
                    </div>
                </div>
            </header>

        )
    }
}
export default Header;