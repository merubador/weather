import React, {Component} from 'react';
import Nav from "./Nav";
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

class Favorites extends Component {

  removeCity(e) {
    var city = e.target.id;
    this.props.onRemoveCity(city);
  }

  findCity() {
    this.props.onFindCity(this.searchInput.value.toLowerCase());
  }

  render() {
    return(
      <div className="fav">
        <Nav /> 
        <h1>Favorites</h1>
        <div className="findBlock">
          <input type="text" ref={(input) => { this.searchInput = input }} />
          <button onClick={this.findCity.bind(this)}>Find</button>
        </div>
        <ul>
        {this.props.cities.map((item, index) =>
            <li key={index}>
              <div className="name"><Link to={`/city/${item.woeid}`}>{item.name}</Link></div>
              <input type="submit" className="btn" value='Remove' woeid={`${item.id}`} id={`${item.id}`} name={`${item.name}`} onClick={this.removeCity.bind(this)} />
            </li>
            )}
        </ul>
      </div>
    );
  }
}
export default connect(
  state =>({
    cities: state.cities.filter(city => city.name.toLowerCase().includes(state.filterCity))
  }),
  dispatch => ({
    onAddCity: (name) => {
      const payload = {
        id: Date.now().toString(),
        name
      };
      dispatch({type: 'ADD_CITY', payload});
    },
    onFindCity: (name) => {
      dispatch({ type: 'FIND_CITY', payload: name });
    },
    onRemoveCity: (idCity) => {
      dispatch({ type: 'REMOVE_CITY', payload: idCity });
    }
  })
)(Favorites);