import PropTypes from 'prop-types';
import {Redirect, Route} from 'react-router';

// Rutas privadas, solo para usuarios ya logeados
export const PrivateRoute = ({isAuthenticated, component: Component, ...rest}) => {
  return (
    <Route {...rest} component={(props) => (isAuthenticated ? <Component {...props} /> : <Redirect to="/auth/login" />)} />
  );
};

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool,
  component: PropTypes.func.isRequired,
  path: PropTypes.string
};
