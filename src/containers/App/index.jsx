import React from "react";
import { Link, Route, Switch, withRouter } from "react-router-dom";
import routeService from "Services/_routerServices.js";
import Layout from "../Layout";

const AppContainer = () => {
    return (
        <>
            <Layout title="EcommerceApp">
                <Switch>
                    {routeService.map((route, key) => (
                        <Route
                            key={key}
                            path={`${route.path}`}
                            component={route.component}
                        />
                    ))}
                </Switch>
            </Layout>
        </>
    );
};

export default withRouter(AppContainer);
