import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSomeCity } from '../actions';
import '../App.css';
import '../preloader.gif';
import { getForecast } from '../selectors';

class City extends Component {

  componentDidMount() {
    const { onSomeCity, match:{ params: {number} }} = this.props;
    onSomeCity(number);
  }

  componentWillUnmount() {
    this.props.onClearSomeCity();
  }

  render() {
    const { forecast } = this.props;
    const cityWeather = forecast ? forecast.weather : [];
    return (
      <div>
        { cityWeather ? <h1>City: {forecast.title} </h1> : '' }
        <div className="forecast">
        {cityWeather ?
          cityWeather.map((item, key) =>
            <div key={key} className="day">
              <div>{item.applicable_date}</div>
              <img src={`https://www.metaweather.com/static/img/weather/${item.weather_state_abbr}.svg`} alt={item.weather_state_name} /><span>{item.weather_state_name}</span>
              <div><b>Max: </b>{item.max_temp}</div>
              <div><b>Min: </b>{item.min_temp}</div>
              <div><b>Humidity: </b>{item.max_temp}</div>
              <div><b>Wind speed: </b>{item.wind_speed} mph</div>
            </div>
          ) :
            <div className="preloader">
              <img src={require('../preloader.gif')} alt="preloader" />
            </div>
          }
        </div>
      </div>
    );
  }
}

export default connect(
  state =>({
    forecast: getForecast(state)
  }),
  dispatch => ({
    onSomeCity: (woeid) => {
      dispatch(getSomeCity(woeid));
    },
    onClearSomeCity: () => {
      dispatch({type: 'GET_SOME_CITY', payload: {}});
    }
  })
)(City);
