import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import UserContext from '../../contexts/UserContext';
import { ROUTES } from '../../utils/consts';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { isAuthenticated } = useContext(UserContext);
    return (
        <Route
            {...rest}
            render={(routeProps) =>
                isAuthenticated ? (
                    <Component {...routeProps} />
                ) : (
                    <Redirect to={ROUTES.HOME} />
                )
            }
        />
    );
};

export default PrivateRoute;
