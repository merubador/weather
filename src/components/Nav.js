import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <div className="nav">
                <ul>
                    <li><Link to="/">Search</Link></li>
                    <li><Link to="/favorites">Favorites</Link></li>
                </ul>
            </div>
        );
    }
}

export default Nav;