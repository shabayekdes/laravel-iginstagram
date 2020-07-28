import React, { Component } from "react";
import { connect } from "react-redux";
import { IgApiClient } from "instagram-private-api";

class ListAccount extends Component {
    constructor(props) {
        super(props);
        this.ig = new IgApiClient();
    }

    login = async (username, password) => {
        // console.log(this.ig);
        console.log(username, password);

        this.ig.state.generateDevice(username);
        // ig.state.proxyUrl = process.env.IG_PROXY;
        await this.ig.account.login(username, password);
    };

    connect = async account => {
        account.rtmp = "fdfjgfj1524212g00dkfhldkhldlsdfgsdf";

        this.props.addRtmpToAccount(account);

        try {
            await this.ig.simulate.preLoginFlow();
            // basic login-procedure
            await this.login(account.username, account.password);
        } catch (error) {
            console.error(error);
        }
    };

    startLiveStream = async () => {

        try {
          const { broadcast_id, upload_url } = await client.live.create({
            // create a stream in 720x1280 (9:16)
            previewWidth: 720,
            previewHeight: 1280,
            // this message is not necessary, because it doesn't show up in the notification
            message: "My message",
          });
          console.log({ broadcast_id, upload_url });
          const { stream_key, stream_url } = LiveEntity.getUrlAndKey({
            broadcast_id,
            upload_url,
          });
          console.log({ stream_key, stream_url });

        } catch (error) {

        }
      };

    render() {
        const { accounts } = this.props;

        const listItems = accounts.map(account => (
            <div className="d-flex bd-highlight" key={account.id}>
                <div className="p-2 align-self-center bd-highlight">
                    <div className="form-group form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                        />
                    </div>
                </div>
                <div className="p-2 flex-fill bd-highlight">
                    <div className="form-group">
                        <label htmlFor={"username-" + account.username}>
                            {account.username}
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id={"username-" + account.username}
                            value={account.rtmp || ""}
                            aria-describedby="emailHelp"
                        />
                    </div>
                </div>
                <div className="p-2 align-self-center bd-highlight">
                    <a
                        href="#"
                        className="btn btn-primary"
                        onClick={() => this.connect(account)}
                        // onClick={() => addRtmpToAccount(1)}
                    >
                        Connect
                    </a>
                </div>
            </div>
        ));
        return <div>{listItems}</div>;
    }
}
function mapStateToProps(state) {
    return {
        x: state.count
    };
}
export default connect(mapStateToProps)(ListAccount);
