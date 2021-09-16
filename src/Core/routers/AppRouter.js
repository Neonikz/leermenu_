import {useContext} from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import {AuthContext} from '../../Shared/contexts/AuthContext';

// Componenets
import {LoginScreen} from '../../Screens/AuthScreen/LoginScreen';
import {RegisterScreen} from '../../Screens/AuthScreen/RegisterScreen';
import {CameraScreen} from '../../Screens/CameraScreen/CameraScreen';
import {EditMenu} from '../../Screens/EditMenuScreen/EditMenu';
import {NavbarComponent} from '../Navbar/NavbarComponent';
import {HomeScreen} from '../../Screens/HomeScreen/HomeScreen';
import {PublicMenuScreen} from '../../Screens/PublicMenuScreen/PublicMenuScreen';
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
          <Route exact path="/verMenu" component={PublicMenuScreen} />
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
