import React from 'react';
import Agenda from '../agenda/agenda';
import Announcements from '../announcements/announcements';
import Cover from '../cover/cover';
import './program.scss';

const Program = () => {
    //cover
    //program
    //announcements
    //links

    return (
        <div className='program-container'>
            <Cover />
            <Agenda />
            <Announcements />
        </div>
    );
}

export default Program;