import  React  from 'react';
import { Route, Navigate } from 'react-router-dom';

export default function  PrivateRoute  ({ children }) {
    const [authenticated] = React.useState(
        sessionStorage.getItem('authenticated') == 'true' || false
      );
    return authenticated ? children : <Navigate to="/login" />;
  };

