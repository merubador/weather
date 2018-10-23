import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeCity, findCity } from '../actions';
import { Link } from 'react-router-dom';
import '../App.css';

class Favorites extends Component {
  componentWillUnmount() {
    this.props.onFindCity('');
  }

  handleChange = (e) => {
    this.props.onFindCity(e.target.value);
  }

  render() {
    const { favorites } = this.props;
    return (
      <div>
        <h1>Favorites</h1>
        <input type="text" onChange={this.handleChange} />
        <ul className="cityList">
          {favorites.map((item, key) =>
            <li key={key}>
              <h4 className="name"><Link to={`/city/${item.woeid}`}>{item.name}</Link></h4>
              <button className="btn" onClick={() => this.props.onRemoveCity(item.woeid)}>Remove</button>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({
    favorites: state.favorites.filter(favorites => favorites.name.toLowerCase().includes(state.filterCity))
  }),
  dispatch => ({
    onRemoveCity: (woeid) => {
      dispatch(removeCity(woeid));
    },
    onFindCity: (name) => {
      dispatch(findCity(name));
    }
  })
)(Favorites);
