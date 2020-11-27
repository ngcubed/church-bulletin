import axios from 'axios';
import {DateTime} from 'luxon';
import { isLoading, setBulletin, setErrorMessage } from '../state/actions';
import { getSecureTokensFromSTS } from './awsSTS';
import aws4 from 'aws4';
import { isAWSTokenValid } from './awsLogic';

const findNextSunday = () => {
    let daysToSunday = 7 - DateTime.local().weekday;
    return DateTime.local().plus({days: daysToSunday});
}

export const getLatestBulletin = async (dispatch) => {

    let urlParams = new URLSearchParams(window.location.search);

    let day = DateTime.local();
    if(day.weekday !== '0') {
        day = findNextSunday();
    }

    try {
        dispatch(isLoading(true));
        let response = await axios.get('https://7qseesv2jh.execute-api.us-east-2.amazonaws.com/default/churchBulletin', {
                headers: {
                    'X-Api-Key': `${urlParams.get('key')}`,
                    'Content-Type' : 'application/json'
                }, 
                params: {
                    d: `${day.toFormat('yyyy-MM-dd')}`
                }
            });
        if(response.status === 200) {
            response.data.cover.logo = process.env.PUBLIC_URL + '/oaktree.png';
            dispatch(setBulletin(response.data));
        } else {
            console.log(response.status, " ", response.statusText," ", response)
        }
    } catch (error) {
        dispatch(setErrorMessage('Please refresh to try again'));
    }
}

export const getDashboard = async (dispatch, userToken, awsAcccess) => {
    try {
        let data = awsAcccess ? awsAcccess : null;
        if(data === null || !isAWSTokenValid(awsAcccess)) {
            data = await getSecureTokensFromSTS(dispatch, userToken);
        }
        console.log('back in dashboard, data is: ', data);
        let request = {
            host: 'c43o0u35nf.execute-api.us-east-2.amazonaws.com',
            method: 'GET',
            url: 'https://c43o0u35nf.execute-api.us-east-2.amazonaws.com/default',
            path: '/default'
        }
        let signedRequest = aws4.sign(request, {
            secretAccessKey: data.Credentials.SecretAccessKey,
            accessKeyId: data.Credentials.AccessKeyId,
            sessionToken: data.Credentials.SessionToken
        });
        delete signedRequest.headers['Host']
        delete signedRequest.headers['Content-Length']
        let response = await axios(signedRequest);
        if(response.status === 200) {
            console.log('200 response: ', response.data);
        }
    } catch(err) {
        console.log('back in dashboard, err is : ', err)
    }
}

export const getLatestCover = async () => {
    
}

export const getLatestAgenda = () => {

}

export const getLatestAnnouncements = () => {
    
}

export const getLatestLesson = () => {

}