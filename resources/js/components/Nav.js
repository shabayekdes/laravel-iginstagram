import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Account from "../pages/Account";


class Nav extends Component {
    render() {
        return (
            <div>Nav</div>
            // <BrowserRouter>
            //     <div>
            //         <Switch>
            //             <Route exact path="/" component={Account} />
            //         </Switch>
            //     </div>
            // </BrowserRouter>
        );
    }
}

export default Nav;
