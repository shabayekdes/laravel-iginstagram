import React, { Component } from "react";
import ReactDOM from "react-dom";
import ListAccount from "../Account/ListAccount";
import { IgApiClient } from "instagram-private-api";

class Account extends Component {
    constructor () {
        super()
    
        this.state = {
          accounts: [
            // {
            //     id : 1,
            //     username : "esmailshabayek",
            //     password : "12345678"
            // },
            // {
            //     id : 2,
            //     username : "shabayekdes",
            //     password : "12345678"
            // }
          ]
        }

        const ig = new IgApiClient();

        console.log(ig)
      }


      componentDidMount () {
        axios.get('/api/accounts').then(response => {
          this.setState({
            accounts: response.data.data
          })
        })
      }
    render() {


        // const signIn = async () => {
 
        //     try {
        //       await client.state.generateDevice("14343");
        //       await client.account.login("13434", 13344);
        //       console.log(`Logged in`)
        //       return;
        //     } catch (error) {
        //       console.error({ error });
    
        //     }
        //   };

        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title">My Accounts</h5>
                            </div>

                            <div className="card-body">
                                <div class="form-group row">
                                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">RTMP:</label>
                                    <div className="col-sm-7">
                                        <input type="email" className="form-control" value="rtmps://live-upload.instagram.com:443/rtmp/"
                                            id="inputEmail3" />
                                    </div>
                                    <div className="col-sm-3">
                                        <a href="#" className="btn btn-success" data-toggle="modal" data-target="#staticBackdrop">Add
                                            account</a>
                                    </div>
                                </div>
                                <ListAccount accounts={this.state.accounts} />
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
                                        <label htmlFor="inputUsername">Username</label>
                                        <input type="text" className="form-control" name="username" id="inputUsername"
                                            aria-describedby="usernameHelp" />
                                        <small id="usernameHelp" className="form-text text-muted">We'll never share your
                                            email with anyone else.</small>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputPassword">Password</label>
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
}

export default Account;