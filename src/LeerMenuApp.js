import {AppRouter} from './Core/routers/AppRouter';
import {Provider} from 'react-redux';
import {store} from './Shared/store/store';

export const LeerMenuApp = () => {
  return (
    <>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </>
  );
};
