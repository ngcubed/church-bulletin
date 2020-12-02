import React from 'react';
import DashboardTile from './dashboard-tile';
import './dashboard.scss';

const Dashboard = (props) => {

    if(props.data === null) return <div>Loading...</div>

    return (
        <div className='dashboard-container'>
            {props.data.map(tile => {
                return <DashboardTile data={tile} />
            })}
        </div>
    )
}

export default Dashboard;