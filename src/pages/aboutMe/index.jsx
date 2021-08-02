import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import { AsyncAboutMeContainer } from "Containers/AsyncContainers";

const AboutMe = ({ match }) => {
    return (
        <Switch>
            <Route path={`${match.url}`} component={AsyncAboutMeContainer} />
        </Switch>
    );
};

export default withRouter(AboutMe);
