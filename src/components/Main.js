import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Favorites from "./Favorites";
import Search from "./Search";
import City from "./City";
import { BrowserRouter } from 'react-router-dom';

class Main extends Component {
    render() {
        return (
            <main>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={Search}/>
                        <Route path='/favorites' component={Favorites}/>
                        <Route path='/city/:number' component={City}/>
                    </Switch>
                </BrowserRouter>
            </main>
        );
    }
}
  
export default Main