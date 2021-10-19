import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import UseAuth from '../../../Hooks/UseAuth';

const PrivetRoute = ({ children, ...rest }) => {
  const { user, loading } = UseAuth();
  
  // waiting before information 
  if (loading) {
    return <Spinner animation="grow" variant="info mx-auto d-flex mt-5 fs-1" />
  }

    return (
        <Route
            {...rest}
            render={({ location }) => user?.email ? children :
            <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
            }
        >

        </Route>
    );
};

export default PrivetRoute;