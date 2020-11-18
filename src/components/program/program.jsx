import React from 'react';
import Agenda from '../agenda/agenda';
import Announcements from '../announcements/announcements';
import Cover from '../cover/cover';
import Lesson from '../lesson/lesson';
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
            <Lesson />
            <Announcements />
        </div>
    );
}

export default Program;