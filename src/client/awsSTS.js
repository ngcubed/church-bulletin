import AWS from 'aws-sdk';
import { setToken } from '../state/actions';
let sts = new AWS.STS({});

export const getSecureTokensFromSTS = async (dispatch, idToken) => {
    const config = {
        RoleArn: 'arn:aws:iam::164535879341:role/church-bulletin-admin-role',
        RoleSessionName: 'church-bulletin-admin-session',
        WebIdentityToken: idToken
    };
    return await new Promise((resolve, reject) => {
        sts.assumeRoleWithWebIdentity(config, (err, data) => {
            if(err) {
                reject(err);
            }
            if(data) {
                dispatch(setToken(data));
                resolve(data);
            }
        });
    });
}
