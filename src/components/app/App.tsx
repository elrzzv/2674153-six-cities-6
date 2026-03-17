import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

function App({ offersNumber }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Paths.Main} element={<Main offersNumber={offersNumber} />} />
        <Route path={Paths.Offer} element={<Offer />} />
        <Route path={Paths.Login} element={<Login />} />
        <Route path={Paths.Favorites} element=
          {
            <PrivatePage authStatus={AuthorizationStatus.NoAuth}>
              <Favorites />
            </PrivatePage>
          }
        />
        <Route path={Paths.NotFound} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
