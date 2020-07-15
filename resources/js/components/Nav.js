import React, { Component } from "react";
// import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Account from "../pages/Account";

class Nav extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Account} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Nav;
