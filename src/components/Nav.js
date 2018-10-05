import React from "react";
import { Link } from 'react-router-dom';

const Nav = () => (
            <div className="nav">
                <ul>
                    <li><Link to="/">Search</Link></li>
                    <li><Link to="/favorites">Favorites</Link></li>
                </ul>
            </div>
        );

export default Nav;