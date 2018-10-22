import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSomeCity } from '../actions/forecast';
import '../App.css';

class City extends Component {

  componentDidMount() {
    this.props.onSomeCity(this.props.match.params.number);
  }

  round(x){
    const result = Math.round(x);
    if(!isNaN(result)) {
      return result;
    } else {
      return '';
    }
  }

  showWeather() {
    const listItems = this.props.forecast.map((item, key) => 
      <div key={key} className="day">
        <div>{item.applicable_date}</div>
        <img src={`https://www.metaweather.com/static/img/weather/${item.weather_state_abbr}.svg`} alt="" /><span>{item.weather_state_name}</span>
        <div><span>Max: </span>{this.round(item.max_temp)}</div>
        <div><span>Min: </span>{this.round(item.min_temp)}</div>
        <div><span>Humidity: </span>{this.round(item.max_temp)}</div>
        <div><span>Wind speed: </span>{this.round(item.wind_speed)} mph</div>
      </div>
    );

    return <div className="forecast">{listItems}</div>
  }

  render() {
    return (
      <div>
        <h1>City: </h1>
        {this.showWeather()}
      </div>
    );
  }
}

export default connect(
  state =>({
    forecast: state.forecast
  }),
  dispatch => ({
    onSomeCity: (woeid) => {
      dispatch(getSomeCity(woeid));
    }
  })
)(City);
