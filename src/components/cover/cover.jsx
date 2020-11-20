import React, {useEffect} from 'react';
import {useStore, useDispatch} from '../../state/action-store';
import { getLatestCover } from '../../client/awsClient';
import { setCover } from '../../state/actions';
import {DateTime} from 'luxon';

import './cover.scss';

const Cover = () => {
    const { cover } = useStore();
    const dispatch = useDispatch();

    useEffect(() => {
        const getCovers = async () => {
            const cover = await getLatestCover();
            if(cover.error) {
                console.log('unable to get latest cover')
            } else {
                dispatch(setCover(cover))
            }
        }
        if(cover === null) {
            getCovers();
        }
    },[]) // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        const handleScroll = () => {
            const img = document.getElementsByClassName('cover-image')[0];
            img.style.top = window.pageYOffset + 'px';
        }
        
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    });

    if(cover === null) return <></>;

    const formattedDate = DateTime.fromISO(cover.date).toFormat('MMM d, yyyy');
    return (
        <div className='cover-container'>
            <div className='cover-header'>
                <img src={cover.logo} alt='logo' id='logo' />
                <h1>{cover.name}</h1>
                <h2>{cover.type}</h2>
                <div className='cover-date'>{formattedDate}</div>
            </div>
            <div className="cover-image-container">
                <img 
                    className='cover-image' 
                    src={cover.image}
                    alt=''
                    height={window.innerHeight}
                />
            </div>
        </div>
    );
}

export default Cover;