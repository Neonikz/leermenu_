import {useReducer} from 'react';
import {AuthContext} from './screen/Auth/AuthContext';
import {authReducer} from './reducers/authReducer';
import {AppRouter} from './routers/AppRouter';

export const LeerMenuApp = () => {
  //Declaramos el reducer
  const [user, dispatch] = useReducer(authReducer, {});
  return (
    <>
      {/* Implementamos el Context Provider a la app */}
      <AuthContext.Provider value={{user, dispatch}}>
        <AppRouter />
      </AuthContext.Provider>
    </>
  );
};