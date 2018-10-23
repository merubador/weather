import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Search from './Search';
import Favorites from './Favorites';
import City from './City';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <div className="header">
              <div className="container"> 
                <ul className="nav">
                    <li><Link to="/">Search</Link></li>
                    <li><Link to="/favorites">Favorites</Link></li>
                </ul>
              </div>
            </div>
            <div className="main">
              <div className="container">
                <Switch>
                  <Route exact path="/" component={Search} />
                  <Route path="/favorites" component={Favorites} />
                  <Route path="/city/:number" component={City} />
                </Switch>
              </div>
            </div>
          </div>
			  </BrowserRouter>
      </div>
    );
  }
}

export default App;
