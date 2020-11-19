import React, {useEffect} from 'react';
import { getLatestAnnouncements } from '../../client/awsClient';
import {useStore, useDispatch} from '../../state/action-store';
import { setAnnouncements } from '../../state/actions';
import { ANNOUNCEMENT_TYPES } from '../shared/shared-defs';
import { getAnnouncementsByType } from './announcementLogic';
import AnnouncementSection from './announcementSection';
import './announcements.scss'

const Announcements = () => {
    const { announcements } = useStore();
    const dispatch = useDispatch();

    useEffect(() => {
        const getAnnouncements = async () => {
            const latestAnnouncements = await getLatestAnnouncements();
            if(latestAnnouncements.error) {
                console.log('unable to get latest announcements.');
            } else {
                dispatch(setAnnouncements(latestAnnouncements));
            }
        }
        if(announcements === null) {
            getAnnouncements();
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    if(!announcements) return <></>;

    const groupedAnnouncements = Object.values(ANNOUNCEMENT_TYPES).map((value, index) => {
        const filteredAnnouncements = getAnnouncementsByType(value, announcements);
        return <AnnouncementSection type={value} announcements={filteredAnnouncements} key={value+index} />
    })

    return (
        <div className='announcements-container'>
            <h2>Announcements</h2>
            {groupedAnnouncements}
        </div>
    )
}

export default Announcements;