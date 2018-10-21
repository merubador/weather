import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Search from './Search';
import Favorites from './Favorites';
import { getCities } from '../actions/cities';
import '../App.css';

class App extends Component {

  componentWillMount() {
    //this.props.onGetCities('z');
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <div>
              <ul className="nav">
                  <li><Link to="/">Search</Link></li>
                  <li><Link to="/favorites">Favorites</Link></li>
              </ul>
            </div>
            <Switch>
              <Route exact path="/" component={Search} />
              <Route path="/favorites" component={Favorites} />
            </Switch>
          </div>
			  </BrowserRouter>
      </div>
    );
  }
}

export default connect(
  state =>({
    cities: state.cities
  }),
  dispatch => ({
    onGetCities: (city) => {
      dispatch(getCities(city));
    }
  })
)(App);
