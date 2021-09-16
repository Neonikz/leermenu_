import {Link, useHistory} from 'react-router-dom';
import {GoogleLogin, GoogleLoginResponseOffline} from 'react-google-login';
import Swal from 'sweetalert2';

import {useContext} from 'react';
import {AuthContext} from '../../Shared/contexts/AuthContext';

export const LoginScreen = () => {
  //Implementamos history
  const history = useHistory();

  // Implementamos el context en el login
  const {dispatch} = useContext(AuthContext);

  // Respuesta del boton de google
  const responseGoogle = response => {
    const {profileObj, accessToken} = response;

    dispatch({
      type: 'login',
      payload: {
        profileObj,
        accessToken
      }
    });

    history.push('/editMenu');
    //Modal que pregunta si el usuario esta seguro de registrarse
    // Swal.fire({
    //   title: '¿Esta seguro que desea registrarse?',
    //   showDenyButton: true,
    //   showCancelButton: true,
    //   confirmButtonText: `Si`,
    //   denyButtonText: `No`,
    // }).then((result) => {

    //   if (result.isConfirmed) {
    //     //TODO: Preguntar al back si hay esta registrado

    //   } else if (result.isDenied) {
    //     Swal.fire('No hay problema', '', 'info')
    //   }
    // })

    // Preguntar si existe el usuario

    // Existe? llevarlo al edit menu : preguntarle si desea registrarse

    // Se quiere registrar? llevarlo a editMenu : llevarlo a home;
  };

  const errorLogin = error => {
    console.log(error);
  };

  return (
    <div className="bg-blue-800 w-screen h-screen flex justify-center flex-wrap items-center">
      <form className="flex bg-white justify-center flex-col items-center m-12 p-5">
        <div className="flex justify-center items-center flex-col">
          <p>Registrate o inicia sesion con Google</p>
          {/* Boton de google */}
          <GoogleLogin
            render={renderProps => (
              <button onClick={renderProps.onClick} disabled={renderProps.disabled} className="qr-button mt-2">
                Login
              </button>
            )}
            clientId="161178553064-vs9gfm3sv4g399l69eqbsq8dj1elbtll.apps.googleusercontent.com"
            onSuccess={responseGoogle}
            onFailure={errorLogin}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
          />
          <hr />
        </div>

        <Link to="/auth/register" className="text-yellow-600">
          Create new account
        </Link>
      </form>
    </div>
  );
};
