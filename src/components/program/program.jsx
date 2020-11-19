import React, { useEffect } from 'react';
import { getLatestBulletin } from '../../client/awsClient';
import { useDispatch, useStore } from '../../state/action-store';
import Agenda from '../agenda/agenda';
import Announcements from '../announcements/announcements';
import Cover from '../cover/cover';
import Lesson from '../lesson/lesson';
import Spinner from '../shared/spinner';
import './program.scss';

const Program = () => {
    const { isLoading } = useStore();
    const dispatch = useDispatch();
    useEffect(() => {
        const getBulletin = async () => {
            await getLatestBulletin(dispatch);
        }
        getBulletin();
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    if(isLoading === false) {
        return (
            <div className='program-container'>
                <Cover />
                <Agenda />
                <Lesson />
                <Announcements />
            </div>
        );
    } else {
        return (
            <Spinner />
        )
    }
}

export default Program;