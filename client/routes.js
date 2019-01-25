/* eslint-disable global-require */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './modules/App/App';
//import { About } from './modules/About/About';
//import { Vision } from './modules/VisionMission/Vision';

// require.ensure polyfill for node
if (typeof require.ensure !== 'function') {
  require.ensure = function requireModule(deps, callback) {
    callback(require);
  };
}

/* Workaround for async react routes to work with react-hot-reloader till
  https://github.com/reactjs/react-router/issues/2182 and
  https://github.com/gaearon/react-hot-loader/issues/288 is fixed.
 */
if (process.env.NODE_ENV !== 'production') {
  // Require async routes only in development for react-hot-reloader to work.
  require('./modules/About/About');
}

// react-router setup with code-splitting
// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/
export default (
  <Route path="/" component={App}>
    <IndexRoute
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Home/Home').default);
        });
      }}
    />
    <Route
      path="/about"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/About/About').default);
        });
      }}
    />
    <Route
      path="/vision"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/VisionMission/Vision').default);
        });
      }}
    />
    <Route
      path="/events"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Events/Events').default);
        });
      }}
    />
    <Route
      path="/contacts"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Contacts/Contacts').default);
        });
      }}
    />
    <Route
      path="/donate"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Contributions/Contributions').default);
        });
      }}
    />
    <Route
      path="/member"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Membership/Membership').default);
        });
      }}
    />
  </Route>
  );
