import React from "react";
import ReactDOM from "react-dom";

function Account() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="card-title">My Accounts</h5>
                        </div>

                        <div className="card-body">
                            <div className="d-flex bd-highlight">
                                <div className="p-2 align-self-center bd-highlight">
                                    <div className="form-group form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    </div>
                                </div>
                                <div className="p-2 flex-fill bd-highlight">
                                    <div className="form-group">
                                        <label for="exampleInputEmail1">token-username</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1"
                                            aria-describedby="emailHelp" />
                                    </div>
                                </div>
                                <div className="p-2 align-self-center bd-highlight">
                                    <button type="submit" className="btn btn-primary">Connect</button>
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary">Go Live For Selected</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="staticBackdrop" data-backdrop="static" tabindex="-1" role="dialog"
                aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form action="#" method="POST">

                            <div className="modal-body">
                                <div className="form-group">
                                    <label for="inputUsername">Username</label>
                                    <input type="text" className="form-control" name="username" id="inputUsername"
                                        aria-describedby="usernameHelp" />
                                    <small id="usernameHelp" className="form-text text-muted">We'll never share your
                                        email with anyone else.</small>
                                </div>
                                <div className="form-group">
                                    <label for="inputPassword">Password</label>
                                    <input type="password" name="password" className="form-control"
                                        id="inputPassword" />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary"
                                    data-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Account;