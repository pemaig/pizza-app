import React, {useContext} from 'react';
import {Redirect, Route} from "react-router";
import AuthContext from "../../contexts/AuthContext";
import {ROUTES} from "../../utils/consts";

const PrivateRoute = ({component: Component, ...rest}) => {
    const user = useContext(AuthContext)
    return (
        <Route
            {...rest}
            render={routeProps =>
                user
                    ? <Component {...routeProps} />
                    : <Redirect to={ROUTES.HOME}/>
            }
        />
    )
}

export default PrivateRoute