
import React from 'react';
import {
 Route, Switch, withRouter,
} from 'react-router-dom';

import {AsyncNotFoundContainer} from 'Containers/AsyncContainers'

const NotFound = ({ match }) => {
  return (
  <div className="notfound-wrapper">
     <Switch>
      <Route path={`${match.url}`} component={AsyncNotFoundContainer} />
    </Switch>
  </div>
)};
 
 export default withRouter(NotFound);