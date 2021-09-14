import {useContext} from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import {AuthContext} from '../screen/Auth/AuthContext';

// Componenets
import {LoginScreen} from '../screen/Auth/LoginScreen';
import {RegisterScreen} from '../screen/Auth/RegisterScreen';
import {CameraScreen} from '../screen/CameraScreen/CameraScreen';
import {EditMenu} from '../screen/EditMenuScreen/EditMenu';
import {NavbarComponent} from '../components/Navbar/NavbarComponent';
import {HomeScreen} from '../screen/HomeScreen/HomeScreen';
import {MenuScreen} from '../screen/MenuScreen/MenuScreen';
import {PrivateRoute} from './PrivateRoute';

export const AppRouter = () => {
  // Implementamos el context en las rutas
  const {user} = useContext(AuthContext);
  const isAuthenticated = user.logged;

  return (
    <Router>
      <>
        <Switch>
          {/* Rutas publicas */}
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/cameraScan" component={CameraScreen} />
          <Route exact path="/verMenu" component={MenuScreen} />
          <Route exact path="/auth/login" component={LoginScreen} />
          <Route exact path="/auth/register" component={RegisterScreen} />
          {/* Rutas privadas */}
          <PrivateRoute isAuthenticated={isAuthenticated} path="/editMenu" component={EditMenu} />
          <Redirect to="/" />
        </Switch>
        <NavbarComponent isAuthenticated={isAuthenticated} />
      </>
    </Router>
  );
};
