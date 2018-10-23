import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSomeCity } from '../actions';
import '../App.css';
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
        <h1>City: { forecast.title }</h1>
        <div className="forecast">
        {cityWeather ? 
          cityWeather.map((item, key) =>
            <div key={key} className="day">
              <div>{item.applicable_date}</div>
              <img src={`https://www.metaweather.com/static/img/weather/${item.weather_state_abbr}.svg`} alt="" /><span>{item.weather_state_name}</span>
              <div><span>Max: </span>{item.max_temp}</div>
              <div><span>Min: </span>{item.min_temp}</div>
              <div><span>Humidity: </span>{item.max_temp}</div>
              <div><span>Wind speed: </span>{item.wind_speed} mph</div>
            </div>
          ) : <h1>Preloader</h1>}
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
