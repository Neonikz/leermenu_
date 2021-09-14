import {useHistory, useLocation} from 'react-router-dom';

const queryString = require('query-string');

export const MenuScreen = () => {
  // Implementamos history y location
  const history = useHistory();
  const location = useLocation();

  //Extraemos el URL y lo parseamos con queryString
  const parsedMenuURL = queryString.parse(location.search);
  const hasSessionMenu = sessionStorage.getItem('urlMenu');

  // Funcion que redirecciona si hay o no un URL o menu
  if (!parsedMenuURL.mesa && !hasSessionMenu) {
    history.push('/cameraScan');
  }

  // Guardamos el url si hay en el sessionStorage
  if (!!parsedMenuURL.mesa && !hasSessionMenu) {
    const stringSalvador = `local=${parsedMenuURL.local}&mesa=${parsedMenuURL.mesa}`;
    sessionStorage.setItem('urlMenu', stringSalvador);
  }

  // Obtenemos el url del sessionStorage
  const tmpObj = sessionStorage.getItem('urlMenu');
  const objMenu = queryString.parse(tmpObj);
  // history.push(`/verMenu?${tmpObj}`) PROXIMAMENTE....

  return (
    <>
      {objMenu ? (
        <>
          <div className="w-full h-screen p-12 dark:text-white flex justify-center flex-col text-center">
            <h1 className="text-2xl">{objMenu.local}</h1>
            <hr />
            <h3 className="mt-8"> Mesa: {objMenu.mesa}</h3>
          </div>
        </>
      ) : null}
    </>
  );
};
