import React from 'react';
import { getAnnouncementTypeMappings } from './announcementLogic';
import marked from 'marked'
import parse from 'html-react-parser';

const AnnouncementSection = (props) => {
    if(!props.announcements || props.announcements.length === 0) return <></>;

    const announcements = props.announcements.map((announcement) => {
        if(props.type !== announcement.type) return <></>;

        return (
            <div className='announcement'>
                {parse(marked(announcement.message))}
            </div>
        );
    })
    return (
        <div className='announcement-section'>
            <div className='announcement-heading'><strong>{getAnnouncementTypeMappings()[props.type]}</strong></div>
            {announcements}
        </div>
    )
}

export default AnnouncementSection;