import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class City extends Component {

  addCity = () => {
    const {onAddCity, item: {woeid, title}} = this.props
    onAddCity(woeid, title);
  }

  render() {
    const { item } = this.props;
    
    return (
      <li>
        <h4 className="name"><Link to={`/city/${item.woeid}`}>{item.title}</Link></h4>
        <button disabled={item.isActive} className="btn" onClick={this.addCity}>Добавить</button>
      </li>
    );
  }
}

export default City;
