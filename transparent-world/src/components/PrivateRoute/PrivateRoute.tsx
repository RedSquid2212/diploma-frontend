import { FC, JSX, memo } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthStatus } from '../../consts/authStatus.enum';

type Props = {
  children: JSX.Element;
  authStatus: AuthStatus;
}

const PrivateRouteComponent: FC<Props> = ({children, authStatus}) => {
  return (
    authStatus === AuthStatus.Authorized ? children : <Navigate to={'/login'} />
  );
}

export const PrivateRoute = memo(PrivateRouteComponent);
