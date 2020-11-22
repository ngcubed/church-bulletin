import React, {useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from '../../state/action-store';
import { setAuth } from '../../state/actions';
import './login.scss';

const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    
    useEffect(() => {
        const onSignIn = (googleUser) => {
            // console.log('onSignIn being called');
            // var profile = googleUser.getBasicProfile();
            // console.log("ID: " + profile.getId()); // Don't send this directly to your server!
            // console.log('Full Name: ' + profile.getName());
            // console.log('Given Name: ' + profile.getGivenName());
            // console.log('Family Name: ' + profile.getFamilyName());
            // console.log("Image URL: " + profile.getImageUrl());
            // console.log("Email: " + profile.getEmail());
     
            // The ID token you need to pass to your backend:
            let token = googleUser.getAuthResponse().id_token;
            dispatch(setAuth(token));
            history.push('/dashboard');
        }

        window.gapi.load('auth2', () => {
            window.gapi.auth2.init({
                client_id: '877425478598-b7fsqjtjeon0n1nkjn3kqrhdoco82lhi.apps.googleusercontent.com'
            })
            .then(() => {
                window.gapi.signin2.render('my-g-signin', {
                    'scope': 'profile email',
                    'width': 200,
                    'height': 40,
                    'longtitle': false,
                    'theme': 'dark',
                    'onsuccess': onSignIn
                })
            })
        })
    }, []);

    return (
        <div className='login-page'>
            <div className="login-page-header">Please login with your google account to manage your bulletin</div>
            <div id="my-g-signin"></div>
        </div>
    )
}

export default Login;