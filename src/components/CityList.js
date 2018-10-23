import React from 'react';
import { connect } from 'react-redux';
import { addCity } from '../actions';
import '../App.css';
import { getCityList } from '../selectors';
import City from './City';

const CityList = ({cityList, onAddCity}) => 
  <ul className="cityList">
    {cityList.map((item, index) =>
      <City key={index} onAddCity={onAddCity} item={item} index={index} />
    )}
  </ul>


export default connect(
  state =>({
    cityList: getCityList(state)
  }),
  dispatch => ({
    onAddCity: (woeid, name) => {
      dispatch(addCity(woeid, name));
    }
  })
)(CityList);
