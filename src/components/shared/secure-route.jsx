import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {useStore} from '../../state/action-store';
import { isUserActive } from '../admin/loginLogic';

const SecureRoute = ({ component: Component, ...otherProps }) => {
    const {user} = useStore();
    
    if(user && isUserActive(user)) {
        return <Route {...otherProps} render={props => <Component {...props} />} />;
    } else {
        return <Route {...otherProps} render={props => <Component {...props} />} />;
        // return <Route {...otherProps} render={props => <Redirect to='/login' />} />;
    }
}

export default SecureRoute;