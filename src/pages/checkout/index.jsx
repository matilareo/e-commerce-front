import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import { AsyncCheckoutContainer } from "Containers/AsyncContainers";

const Checkout = ({ match }) => {
    return (
        <div className="checkout-wrapper">
            <Switch>
                <Route
                    path={`${match.url}`}
                    component={AsyncCheckoutContainer}
                />
            </Switch>
        </div>
    );
};

export default withRouter(Checkout);
