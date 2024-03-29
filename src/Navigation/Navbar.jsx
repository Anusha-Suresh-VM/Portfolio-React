import React from "react";
import { Link } from "react-router-dom";
export default function Navbar(){
    return(
        <div id="nav">
            <ul>
                <li>
                    <Link to={'./'}>Home</Link>
                </li>
                <li>
                    <Link to={'./aboutme'}>About me</Link>
                </li>
                <li>
                    <Link to={'./academic'}>Academic</Link>
                </li>
                <li>
                    <Link to={'./myprojects'}>Projects</Link>
                </li>
            </ul>
        </div>
    );
}