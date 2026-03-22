import { Navigate } from 'react-router-dom';
import { AuthorizationStatus, Paths } from '../../const';

type PrivatePageProps = {
  restrictedFor: AuthorizationStatus;
  redirectTo: Paths;
  children: JSX.Element;
}

export default function PrivatePage({restrictedFor, redirectTo , children }: PrivatePageProps): JSX.Element {
  const authStatus = AuthorizationStatus.NoAuth;
  return (
    authStatus === restrictedFor
      ? children
      : <Navigate to={redirectTo} />
  );
}
