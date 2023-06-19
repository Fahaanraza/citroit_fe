import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';


function PrivateRoute({ component: Component, ...rest }) {
//  const isLoggedIn = useAuth();
 const isLoggedIn = true;


 return (
   <Route
     {...rest}
     render={props =>
       isLoggedIn ? (
         <Component {...props} />
       ) : (
        <Route path="/" element={<Navigate to="/login" replace />} />
       )
     }
   />
 );
}


export default PrivateRoute;