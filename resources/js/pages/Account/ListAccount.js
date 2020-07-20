import React, { Component } from "react";
import ReactDOM from "react-dom";

class ListAccount extends Component {

    render() {
        const { accounts } = this.props;
        const listItems = accounts.map((account) =>
            <div className="d-flex bd-highlight" key={account.id}>
                <div className="p-2 align-self-center bd-highlight">
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    </div>
                </div>
                <div className="p-2 flex-fill bd-highlight">
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">{ account.username }</label>
                        <input type="email" className="form-control" id="exampleInputEmail1"
                            aria-describedby="emailHelp" />
                    </div>
                </div>
                <div className="p-2 align-self-center bd-highlight">
                    <button type="submit" className="btn btn-primary">Connect</button>
                </div>
            </div>
        );
        return (
            <div>
                {listItems}
            </div>
        );
    }
}

export default ListAccount;