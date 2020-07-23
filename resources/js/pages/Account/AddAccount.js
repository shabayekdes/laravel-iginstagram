import React, { Component } from "react";

class AddAccount extends Component {
    constructor (props) {
        super(props)
        this.state = {
            username: null,
            password: null
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange (e) {
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.addAccount(this.state);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="modal-body">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" name="username" onChange={this.handleChange} id="username"
                            aria-describedby="usernameHelp" />
                        <small id="usernameHelp" className="form-text text-muted">We'll never share your
                            email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" onChange={this.handleChange} className="form-control"
                            id="password" />
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary"
                        data-dismiss="modal">Close</button>
                    <button type="submit" className="btn btn-primary">Save</button>
                </div>
            </form>
        );
    }
}

export default AddAccount;
