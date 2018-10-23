import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCity } from '../actions';
import '../App.css';
import { getCityList } from '../selectors';
import { Link } from 'react-router-dom';

class CityList extends Component {

  render() {
    const {cityList} = this.props;
    return (
      <ul className="cityList">
        {cityList.map((item, index) =>
          {
            return (
              <li key={index}>
                <h4 className="cityName"><Link to={`/city/${item.woeid}`}>{item.title}</Link></h4>
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
