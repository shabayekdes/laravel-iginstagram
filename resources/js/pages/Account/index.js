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

        // const ig = new IgApiClient();

        // const device = ig.state.generateDevice("14343");
        // const loggg = ig.account.login("13434", 13344);

        // console.log(ig)
        // console.log(device)
        // console.log(loggg)
      }


      componentDidMount () {
        axios.get('/api/accounts').then(response => {
          this.setState({
            accounts: response.data.data
          })
        })
      }
    render() {
        const ig = new IgApiClient();

        // async function login() {
        //     ig.state.generateDevice(process.env.IG_USERNAME);
        //     // ig.state.proxyUrl = process.env.IG_PROXY;
        //     await ig.account.login(process.env.IG_USERNAME, process.env.IG_PASSWORD);
        //   }
          
        //   (async () => {
        //     try {
        //         await ig.simulate.preLoginFlow();
        //         // basic login-procedure
        //         await login();
        //     } catch (error) {
        //         console.error({ error });
        //     }
        //     const { broadcast_id, upload_url } = await ig.live.create({
        //       // create a stream in 720x1280 (9:16)
        //       previewWidth: 720,
        //       previewHeight: 1280,
        //       // this message is not necessary, because it doesn't show up in the notification
        //       message: 'My message',
        //     });
        //     // (optional) get the key and url for programs such as OBS
        //     const { stream_key, stream_url } = LiveEntity.getUrlAndKey({ broadcast_id, upload_url });
        //     console.log(`Start your stream on ${stream_url}.\n
        //       Your key is: ${stream_key}`);

          
        //     // now you're basically done
        //   })();

        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title">My Accounts</h5>
                                <a href="#" className="btn btn-success" onClick={this.signIn} >Add
                                            account</a>
                            </div>

                            <div className="card-body">
                                <div className="form-group row">
                                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">RTMP:</label>
                                    <div className="col-sm-7">
                                        <input type="email" className="form-control" value="rtmps://live-upload.instagram.com:443/rtmp/"
                                            id="inputEmail3" />
                                    </div>
                                    <div className="col-sm-3">
                                        <a href="#" className="btn btn-success" onClick={this.signIn} data-toggle="modal" data-target="#staticBackdrop">Add
                                            account</a>
                                    </div>
                                </div>
                                <ListAccount accounts={this.state.accounts} />
                                <button type="submit" className="btn btn-primary">Go Live For Selected</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="staticBackdrop" data-backdrop="static" tabIndex="-1" role="dialog"
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