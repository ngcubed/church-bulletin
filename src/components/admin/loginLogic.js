import {DateTime} from 'luxon';

export const isUserActive = (user) => {
    if(user === null) return false;
    if(user.getAuthResponse().expires_at) {
        const expired = DateTime.fromMillis(user.getAuthResponse().expires_at);
        const now = DateTime.local();
        if(now < expired) return true;
    }
    return false;
}