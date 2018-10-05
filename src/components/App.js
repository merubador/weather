import React, { Component } from "react";

import { connect } from 'react-redux';

import { 
  BrowserRouter as Router,
  Route,
  Link 
} from 'react-router-dom'

import Main from "./Main";

class App extends Component {

  addCity(e) {
    var city = e.target.name;
    var id = e.target.value;
    this.props.onAddCity(city, id);
  }

  render() {
    return (
      <div className="container">
        <Main />
      </div>
    );
  }
  } 

export default connect(
  state =>({
    cities: state.cities.filter(city => city.name.includes(state.filterCity))
  }),
  dispatch => ({
    onAddCity: (name, woeid) => {
      const payload = {
        id: Date.now().toString(),
        name,
        woeid
      };
      dispatch({type: 'ADD_CITY', payload});
    },
    onFindCity: (name) => {
      dispatch({ type: 'FIND_CITY', payload: name });
    }
  })
)(App);