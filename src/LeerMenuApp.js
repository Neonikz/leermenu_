import {useReducer} from 'react';
import {AuthContext} from './Shared/contexts/AuthContext';
import {authReducer} from './Shared/reducers/authReducer';
import {AppRouter} from './Core/routers/AppRouter';

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
