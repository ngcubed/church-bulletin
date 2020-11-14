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
            <h1>{cover.name}</h1>
            <h2>{cover.type}</h2>
            <img src={cover.image} alt='' />
            <p>{cover.date.toString()}</p>
        </div>
    );
}

export default Cover;