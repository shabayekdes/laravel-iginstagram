import React, { Component } from "react";
import ReactDOM from "react-dom";
import ListAccount from "../Account/ListAccount";
import { IgApiClient } from "instagram-private-api";
import AddAccount from "./AddAccount";

class Account extends Component {
    constructor() {
        super();

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
        };
    }

    componentDidMount() {
        axios.get("/api/accounts").then(response => {
            this.setState({
                accounts: response.data.data
            });
        });
    }

    render() {
        // const ig = new IgApiClient();

        const addAccount = account => {
            axios.post(`/api/accounts`, account).then(res => {
                let accounts = [...this.state.accounts, res.data.data];
                this.setState({
                    accounts
                });
                $("#addAccountModal").modal("hide");
            });
        };

        const addRtmpToAccount = account => {
            const index = this.state.accounts.findIndex(
                element => element.id == account.id
            );
            let newArray = [...this.state.accounts];

            if (index !== -1) {
                newArray.splice(index, 1, account);
            }

            this.setState({
                accounts: newArray
            });
        };

        // const login = async (username, password) => {
        //     ig.state.generateDevice(username);
        //     // ig.state.proxyUrl = process.env.IG_PROXY;
        //     await ig.account.login(username, process.env.IG_PASSWORD);
        //   }

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
                            </div>

                            <div className="card-body">
                                <div className="form-group row">
                                    <label
                                        htmlFor="inputEmail3"
                                        className="col-sm-2 col-form-label"
                                    >
                                        RTMP:
                                    </label>
                                    <div className="col-sm-7">
                                        <input
                                            type="email"
                                            className="form-control"
                                            value="rtmps://live-upload.instagram.com:443/rtmp/"
                                            id="inputEmail3"
                                        />
                                    </div>
                                    <div className="col-sm-3">
                                        <a
                                            href="#"
                                            className="btn btn-success"
                                            // onClick={this.signIn}
                                            data-toggle="modal"
                                            data-target="#addAccountModal"
                                        >
                                            Add account
                                        </a>
                                    </div>
                                </div>
                                <ListAccount
                                    accounts={this.state.accounts}
                                    addRtmpToAccount={addRtmpToAccount}
                                />
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Go Live For Selected
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="modal fade"
                    id="addAccountModal"
                    data-backdrop="static"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="addAccountLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5
                                    className="modal-title"
                                    id="addAccountLabel"
                                >
                                    Modal title
                                </h5>
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <AddAccount addAccount={addAccount} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Account;
