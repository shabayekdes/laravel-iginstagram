
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Account from "../Account";
import Profile from "../Profile";
import Nav from '../../components/Nav'


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Nav />
                    <Switch>
                        <Route exact path="/" component={Account} />
                        <Route exact path="/profile" component={Profile} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
