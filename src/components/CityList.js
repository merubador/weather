import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCities } from '../actions/cities';
import { addCity } from '../actions/favorites';
import '../App.css';

class CityList extends Component {

  showCities() {
    if(this.props.cities.length === 0) {
      return <div>Начните вводить город</div>;
    }

    let listItems = [];
    
    for (let city of this.props.cities) {
      let unactive = false;

      for (let favorite of this.props.favorites) {
        if(city.woeid === favorite.woeid) {
          unactive = true;
          break;
        }
      }

      unactive ? listItems.push(
        <li key={city.woeid}>
          <div className="cityName">{city.title}</div>
          <div className="btn unactive" onClick={() => this.props.onAddCity(city.woeid)}>Добавить</div>
        </li>
      ) : listItems.push(
        <li key={city.woeid}>
          <div className="cityName">{city.title}</div>
          <div className="btn" onClick={() => this.props.onAddCity(city.woeid)}>Добавить</div>
        </li>
      );
    }
      
    return (
      <ul className="cityList">{listItems}</ul>
    );
  }

  render() {
    console.log(this.props);
    return (
      <div>
        {this.showCities()}
      </div>
    );
  }
}

export default connect(
  state =>({
    cities: state.cities,
    favorites: state.favorites
  }),
  dispatch => ({
    onGetCities: (city) => {
      dispatch(getCities(city));
    },
    onAddCity: (woeid) => {
      dispatch(addCity(woeid));
    }
  })
)(CityList);
