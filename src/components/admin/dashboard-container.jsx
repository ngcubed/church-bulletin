import React, { useState } from 'react';
import { getDashboard } from '../../client/awsClient';
import {useStore, useDispatch} from '../../state/action-store';
import Dashboard from './dashboard';
import Bulletin from './bulletin';
import QRGenerator from './qr-generator';
import Nav from './nav';

const DashboardContainer = () => {
    const {user, token} = useStore();
    const dispatch = useDispatch();

    const [navSelected, selectNav] = useState(0);

    const getData = () => {
        dispatch(getDashboard(dispatch, user.getAuthResponse().id_token, token));
    }

    const handleNav = (nav) => {
        selectNav(nav);
    }

    const activeComponent = () => {

        const mock = [
            {date: '2020-11-22', published: true}, {date: '2020-11-29', published: false}, {date: '2020-12-06', published: false}
        ]

        switch (navSelected) {
            case 0:
                return <Dashboard data={mock} />
            case 1:
                return <Bulletin />
            case 2:
                return <QRGenerator />
            default:
                return <Dashboard />
        }
    }

    return (
        <div className='admin-container'>
            <Nav handleNav={handleNav} navSelected={navSelected} />
            {activeComponent()}
        </div>
    )
}

export default DashboardContainer;