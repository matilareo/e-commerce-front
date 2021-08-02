import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import { AsyncContactContainer } from "Containers/AsyncContainers";

const Contact = ({ match }) => {
    return (
        <div className="contact-wrapper">
            <Switch>
                <Route
                    path={`${match.url}`}
                    component={AsyncContactContainer}
                />
            </Switch>
        </div>
    );
};

export default withRouter(Contact);
