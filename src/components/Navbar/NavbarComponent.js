import {NavLink, useHistory} from 'react-router-dom';

// import './NavbarComponent.css';

export const NavbarComponent = ({isAuthenticated}) => {
  // Implementamos el history en el navbar
  const history = useHistory();

  // Funcion del boton de inicio de sesion
  const handleLogin = () => {
    history.push('/auth/login');
  };

  return (
    <>
      {/* NavBar Mobile 📱 */}
      <nav className="visible-auto sm:hidden flex fixed bottom-0 w-screen h-14 z-50 bg-white border-t border-gray-100 dark:bg-gray-700">
        <ul className="flex justify-around items-center w-full">
          {/* Icon: Back ⬅️ */}
          <li>
            <NavLink
              to=""
              className="flex flex-col items-center text-gray-600 dark:text-gray-100"
              onClick={() => {
                history.goBack();
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className=" text-xs">Atras</span>
            </NavLink>
          </li>
          {/* Icon: Next ➡️ */}
          <li>
            <NavLink
              to=""
              className="flex flex-col items-center text-gray-600 dark:text-gray-100"
              onClick={() => {
                history.goForward();
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className=" text-xs">Adelante</span>
            </NavLink>
          </li>
          {isAuthenticated ? (
            <>
              {/* Icon: Editar Menu 📖 */}
              <li>
                <NavLink
                  to="/editMenu"
                  exact
                  activeClassName="dark:text-blue-500 text-blue-800"
                  className="flex flex-col items-center text-gray-600 dark:text-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                  <span className="text-xs">Editar Menu</span>
                </NavLink>
              </li>
              {/* Icon: Config ⚙️ */}
              <li>
                <NavLink
                  to="/editMenu"
                  exact
                  activeClassName="dark:text-blue-500 text-blue-800"
                  className="flex flex-col items-center text-gray-600 dark:text-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-xs">Configuracion</span>
                </NavLink>
              </li>
            </>
          ) : (
            <>
              {/* Icon: Lector QR 📷 */}
              <li>
                <NavLink
                  to="/cameraScan"
                  exact
                  activeClassName="dark:text-blue-500 text-blue-800"
                  className="flex flex-col items-center text-gray-600 dark:text-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
                    />
                  </svg>
                  <span className="text-xs">Escanear</span>
                </NavLink>
              </li>
              {/* Icon: Home 🏠 */}
              <li>
                <NavLink
                  to="/"
                  exact
                  activeClassName="dark:text-blue-500 text-blue-800"
                  className="flex flex-col items-center text-gray-600 dark:text-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  <span className="text-xs">Inicio</span>
                </NavLink>
              </li>
              {/* Icon: Ver Menu 📖*/}
              <li>
                <NavLink
                  to="/verMenu"
                  activeClassName="dark:text-blue-500 text-blue-800"
                  className="flex flex-col items-center text-gray-600 dark:text-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                  <span className=" text-xs">Ver Menu</span>
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>

      {/* Navbar landscape 🖥 */}
      <nav className="visible-auto hidden sm:flex justify-between fixed top-0 w-screen h-14 z-50 bg-white border-t border-gray-100 dark:bg-gray-700 dark:border-gray-800">
        <button>Leer Menu LOGO</button>
        <ul className="flex justify-around items-center w-2/5 dark:text-gray-100">
          <li className="hover:text-gray-400 dark:hover:text-purple-400">Que es?</li>
          <li className="hover:text-gray-400 dark:hover:text-purple-400">Como Funciona</li>
          <li className="hover:text-gray-400 dark:hover:text-purple-400">Contacto</li>
        </ul>

        {/* Boton de inicio de sesion */}
        <button className="btn bg-blue-800 text-white dark:bg-purple-500" onClick={handleLogin}>
          Iniciar sesion
        </button>
      </nav>
    </>
  );
};
