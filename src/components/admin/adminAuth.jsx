import React from 'react';
import {Helmet} from 'react-helmet';

const AdminAuth = () => {

    const onSignIn = (googleUser) => {
        var profile = googleUser.getBasicProfile();
        console.log("ID: " + profile.getId()); // Don't send this directly to your server!
        console.log('Full Name: ' + profile.getName());
        console.log('Given Name: ' + profile.getGivenName());
        console.log('Family Name: ' + profile.getFamilyName());
        console.log("Image URL: " + profile.getImageUrl());
        console.log("Email: " + profile.getEmail());
 
        // The ID token you need to pass to your backend:
        var id_token = googleUser.getAuthResponse().id_token;
        console.log("ID Token: " + id_token);
    }

    return (
        <div>
            <Helmet>
                <meta name='google-signin-scope' content='profile email' />
                <meta name='google-signin-client_id' content='877425478598-b7fsqjtjeon0n1nkjn3kqrhdoco82lhi.apps.googleusercontent.com' />
                <script src="https://apis.google.com/js/platform.js" async defer></script>
            </Helmet>
            <div class="g-signin2" data-onsuccess={onSignIn} data-theme="dark"></div>
        </div>
    )
}

export default AdminAuth;