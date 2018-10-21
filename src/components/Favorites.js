import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';

class Favorites extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Favorites</h1>
      </div>
    );
  }
}

export default connect(
  state =>({
    cities: state.cities
  })
)(Favorites);
