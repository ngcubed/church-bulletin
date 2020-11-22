import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {useStore} from '../../state/action-store';

const SecureRoute = ({ component: Component, ...otherProps }) => {
    const {token} = useStore();
    
    if(token) {
        return <Route {...otherProps} render={props => <Component {...props} />} />;
    } else {
        return <Route {...otherProps} render={props => <Redirect to='/login' />} />;
    }
}

export default SecureRoute;