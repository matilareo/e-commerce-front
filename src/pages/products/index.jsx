import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import { AsyncProductsContainer } from "Containers/AsyncContainers";

const Products = ({ match }) => {
    return (
        <div className="products-wrapper">
            <Switch>
                <Route
                    path={`${match.url}`}
                    component={AsyncProductsContainer}
                />
            </Switch>
        </div>
    );
};

export default withRouter(Products);
