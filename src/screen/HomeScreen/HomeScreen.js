import {useHistory} from 'react-router-dom';
import './HomeScreen.css';

export const HomeScreen = () => {
  // Funcion del boton de dark/light mode
  const handlerToggleMode = () => {
    document.querySelector('html')?.classList.toggle('dark');
    localStorage.theme === 'dark' ? localStorage.removeItem('theme') : (localStorage.theme = 'dark');
  };

  const history = useHistory();
  const handleLogin = () => history.push('/auth/login');

  return (
    <div className="h-full text-center dark:bg-black">
      <section className="visible-auto min-h-1/4 py-28 dark:bg-gray-800 dark:text-white bg-gray-100 mx-12">
        <span className="m-auto w-full">Modo Oscuro?</span>

        <div className="mt-4">
          <label className="switch inline">
            <input type="checkbox" onClick={handlerToggleMode} />
            <span className="slider round" />
          </label>
        </div>
      </section>

      <section className="visible-auto min-h-1/4 py-28 dark:bg-gray-800 dark:text-white bg-gray-100 m-12">
        <div className="flex justify-center">
          <button className="btn bg-blue-800 text-white dark:bg-purple-500" onClick={handleLogin}>
            Iniciar sesion
          </button>
        </div>
      </section>

      <section className="visible-auto min-h-1/4 py-28 dark:bg-gray-800 dark:text-white bg-gray-100 m-12">
        <span>Como funciona</span>
      </section>

      <section className="visible-auto min-h-1/4 py-28 dark:bg-gray-800 dark:text-white bg-gray-100 m-12">
        <span> Contacto</span>
      </section>

      <section className="visible-auto min-h-1/4 py-28 dark:bg-gray-800 dark:text-white bg-gray-100 m-12">
        <span> Nuevo Apartado</span>
      </section>

      <section className="visible-auto min-h-1/4 py-28 dark:bg-gray-800 dark:text-white bg-gray-100 m-12">
        <span> Mas texto</span>
      </section>
    </div>
  );
};
