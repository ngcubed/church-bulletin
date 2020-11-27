import {DateTime} from 'luxon';

export const isAWSTokenValid = (awsTokens) => {
    if (awsTokens === null) return false;
    if( awsTokens && awsTokens.Credentials && awsTokens.Credentials.Expiration) {
        const expire = DateTime.fromJSDate(awsTokens.Credentials.Expiration);
        const now = DateTime.local();
        if(now < expire) return true;
    }
    return false;
}