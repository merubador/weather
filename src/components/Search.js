import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Nav from "./Nav";

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.findCity();
      }
    
    state = {
        cityList: [],
    }

      handleChange = async (e) => {
        this.setState({value: e.target.value});
        let city = e.target.value;
        if(city != "") {
            const api_call = await fetch(`/api/location/search/?query=${city}`);
            const data = await api_call.json();
            this.setState({
                cityList: data
              });
            this.showCity(); 
        }
      }

      findCity() {
        this.props.onFindCity('');
      }

      addCity(e) {
        let city = e.target.name;
        let id = e.target.id;
        this.props.onAddCity(city, id);
      }

      showCity = (e) => {
        const cityList = this.state.cityList;
        const favList = this.props.cities;

        if(cityList != undefined) {
        for (let i = 0; i < cityList.length; i++) {
            for (let iFav = 0; iFav < favList.length; iFav++) {
                if(cityList[i].woeid == favList[iFav].woeid) {
                    cityList[i].active = 'unactive';
                    break;
                    }
            }
        }
    }
        const listItems = cityList.map((item, index) =>
            <li key={index}>
            <div className="name"><Link to={`/city/${item.woeid}`}>{item.title}</Link></div>
            <input type="submit" className={`btn ${item.active}`} value="Add" id={`${item.woeid}`} name={`${item.title}`} onClick={this.addCity.bind(this)} />
            </li>
        );
        return (
            <ul>{listItems}</ul>
        );

      }
      
      render() {
        return (
            <div className="search">
                <Nav /> 
                <h1>Search</h1>
                <form>
                    <input type="text" name="name" onChange={this.handleChange} />
                </form>
                {this.showCity()}
            </div>
            )
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
  )(Search);