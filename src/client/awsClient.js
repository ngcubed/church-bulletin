import axios from 'axios';
import {DateTime} from 'luxon';
import { isLoading, setBulletin, setErrorMessage } from '../state/actions';

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

export const getLatestCover = async () => {
    
}

export const getLatestAgenda = () => {

}

export const getLatestAnnouncements = () => {
    
}

export const getLatestLesson = () => {

}