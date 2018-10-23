import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCities} from '../actions';
import '../App.css';
import CityList from './CityList'

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
    cities: state.cities
  }),
  dispatch => ({
    onGetCities: (city) => {
      dispatch(getCities(city));
    }
  })
)(Search);
