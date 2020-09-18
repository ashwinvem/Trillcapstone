import React, { Component } from "react";
import {withRouter} from "react-router-dom";

class NotFound extends Component {
    constructor(props) {
        super(props);
        this.props.history.push("/");
    }

    render()
    {
        return(
            <div>
                Error occured
            </div>
        );
    }
}

export default withRouter(NotFound)
