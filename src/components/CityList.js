import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCity } from '../actions/favorites';
import '../App.css';
import { getCityList } from '../selectors';

class CityList extends Component {

  render() {
    const {cityList} = this.props;
    console.log(cityList, 'city list');
    return (
      <ul>
        {cityList.map((item, index) =>
          {
            return (
              <li key={index}>
                <h4 className="cityName">{item.title}</h4>
                <button disabled={item.isActive} className="btn" onClick={() => this.props.onAddCity(item.woeid, item.title)}>Добавить</button>
              </li>
            )
          }        
        )}
      </ul>
    );
  }
}

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
