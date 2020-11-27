import React from 'react';
import { getDashboard } from '../../client/awsClient';
import {useStore, useDispatch} from '../../state/action-store';

const Dashboard = () => {
    const {user, token} = useStore();
    const dispatch = useDispatch();

    const getData = () => {
        dispatch(getDashboard(dispatch, user.getAuthResponse().id_token, token));
    }

    return (
        <div>
            <div>Dashboard</div>
            <button onClick={getData}>Get Data</button>
        </div>
    )
}

export default Dashboard;