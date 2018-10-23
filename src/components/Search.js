import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCities } from '../actions';
import '../App.css';
import CityList from './CityList';
import { getCities } from '../selectors';

class Search extends Component {
  handleChange = (e) => {
    this.props.onGetCities(e.target.value);
  }

  componentWillUnmount() {
    this.props.onGetCities('');
  }

  render() {
    return (
      <div>
        <h1>Search</h1>
        <input type="text" onChange={this.handleChange} />
        <CityList />
      </div>
    );
  }
}

export default connect(
  state =>({
    getCities: getCities(state)
  }),
  dispatch => ({
    onGetCities: (city) => {
      dispatch(fetchCities(city));
    }
  })
)(Search);
