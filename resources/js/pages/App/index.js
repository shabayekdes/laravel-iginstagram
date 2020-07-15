import React, { Component } from "react";
import ReactDOM from "react-dom";
// import Nav from '../../components/Nav'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Account from "../Account";
import Profile from "../Profile";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Account} />
                    <Route exact path="/profile" component={Profile} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
