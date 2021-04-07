
 import React from 'react';
 import Loadable from 'react-loadable';
 import { Loader } from 'semantic-ui-react';
 
 
 const AsyncNotFoundContainer = Loadable({
  loader: () => import('Routes/notFound/views'),
  loading: () => <Loader active inline='centered' />,
});

 
 export {
   AsyncNotFoundContainer
 };
 