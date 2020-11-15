import React, {useEffect} from 'react';
import {useStore, useDispatch} from '../../state/action-store';
import { getLatestCover } from '../../client/awsClient';
import { setCover } from '../../state/actions';

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

        getCovers();
    },[]) // eslint-disable-line react-hooks/exhaustive-deps

    if(cover === null) return <></>;
    
    return (
        <div className='cover-container'>
            <div className='cover-header'>
                <img src={cover.logo} alt='logo' id='logo' />
                <h1>{cover.name}</h1>
                <h2>{cover.type}</h2>
                <div className='cover-date'>{cover.date.toString()}</div>
            </div>
            {/* <img src={cover.image} alt={cover.imageAlt} id='cover-image' /> */}
            <div className='cover-image' style={{backgroundImage: `url(${cover.image})`}}></div>
        </div>
    );
}

export default Cover;