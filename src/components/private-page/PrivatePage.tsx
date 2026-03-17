import { Navigate } from 'react-router-dom';
import { AuthorizationStatus, Paths } from '../../const';

type PrivatePageProps = {
  authStatus: AuthorizationStatus;
  children: JSX.Element;
}

export default function PrivatePage({ authStatus, children }: PrivatePageProps): JSX.Element {
  return (
    authStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={Paths.Login} />
  );
}
