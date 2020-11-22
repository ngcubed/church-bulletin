import React from 'react';
import {useStore} from '../../state/action-store';

const Dashboard = () => {
    const {token} = useStore();

    return <div>Dashboard</div>
}

export default Dashboard;