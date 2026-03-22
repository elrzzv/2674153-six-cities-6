import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { Paths, AuthorizationStatus } from '../../const';
import Main from '../../pages/main/Main';
import Offer from '../../pages/offer/Offer';
import Login from '../../pages/login/Login';
import PrivatePage from '../private-page/PrivatePage';
import Favorites from '../../pages/favorites/Favorites';
import NotFound from '../../pages/not-found/NotFound';

type AppProps = {
  offersNumber: number;
}

export default function App({ offersNumber }: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={Paths.Main} element={<Main offersNumber={offersNumber} />} />
          <Route path={Paths.Offer} element={<Offer />} />
          <Route path={Paths.Login} element=
            {
              <PrivatePage restrictedFor={AuthorizationStatus.Auth} redirectTo={Paths.Main}>
                <Login />
              </PrivatePage>
            }
          />
          <Route path={Paths.Favorites} element=
            {
              <PrivatePage restrictedFor={AuthorizationStatus.NoAuth} redirectTo={Paths.Login}>
                <Favorites />
              </PrivatePage>
            }
          />
          <Route path={Paths.NotFound} element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
