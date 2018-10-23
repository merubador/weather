import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeCity, findCity } from '../actions';
import { Link } from 'react-router-dom';
import '../App.css';

class Favorites extends Component {

  componentDidMount() {
    this.props.onFindCity('');
  }

  showFavorites() {
    const listItems = this.props.favorites.map((item, key) =>
    <li key={key}>
      <div className="name"><Link to={`/city/${item.woeid}`}>{item.name}</Link></div>
      <div className="btn" onClick={() => this.props.onRemoveCity(item.woeid)}>Remove</div>
    </li>
    );

    return <ul className="favorites">{listItems}</ul>;
  }

  handleChange = (e) => {
    this.props.onFindCity(e.target.value);
  }

  render() {
    return (
      <div>
        <h1>Favorites</h1>
        <input type="text" onChange={this.handleChange} />
        {this.showFavorites()}
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
