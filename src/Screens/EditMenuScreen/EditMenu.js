import {useContext, useEffect, useState} from 'react';
import {GoogleLogout} from 'react-google-login';
import {useHistory} from 'react-router-dom';

import {AuthContext} from '../../Shared/contexts/AuthContext';

import {Config} from './sections/Config';
import {Menu} from './sections/Menu';
import {getUserData} from './services/EditMenu.services';

export const EditMenu = () => {
  //Implementamos el history
  const history = useHistory();

  // Traigo la data del user
  const {dispatch, user} = useContext(AuthContext);

  const [showOption, setShowOption] = useState({showMenu: true});
  const {profileObj} = user;

  //Funcion para desloguear
  const handlerLogOut = () => {
    dispatch({type: 'logout', payload: {}});
    history.replace('/');
  };

  //TODO:Funcion para cambiar el PATH de config y cuandos sea menu

  useEffect(() => {
    // Deberia pasar la respuesta a un state
    // getUserData(profileObj).then(res => console.log(res));
  }, [profileObj]);

  return (
    <>
      <div className="flex justify-end w-11/12 m-auto">
        {/* Boton de google para logout */}
        <GoogleLogout
          clientId="161178553064-vs9gfm3sv4g399l69eqbsq8dj1elbtll.apps.googleusercontent.com"
          buttonText="Logout"
          onLogoutSuccess={handlerLogOut}
          render={renderProps => (
            <button onClick={renderProps.onClick} disabled={renderProps.disabled} className="qr-button my-2">
              Logout
            </button>
          )}
        ></GoogleLogout>
      </div>
      <hr />

      {/* Boton de configuracion o menu */}
      <button
        className="bg-green-100 text-gray-700 p-4 m-8 outline-none border-none rounded-md"
        onClick={() => setShowOption({showMenu: !showOption.showMenu})}
      >
        {' '}
        {showOption.showMenu ? 'Ver Config' : 'Ver Menu'}
      </button>

      {showOption.showMenu ? <Menu /> : <Config />}
    </>
  );
};
