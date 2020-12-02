import React, {useState} from 'react';
import './dashboard-tile.scss';

const DashboardTile = (props) => {

    const [isReverse, setReversed] = useState(false);

    let cn = 'dashboard-tile';
    cn = props.data.published ? (cn + ' published') : (cn + ' unpublished');
    let status = props.data.published ? 'LIVE' : 'IN PROGRESS';

    const handleReverse = () => {
        setReversed(!isReverse);
    }

    return (
        <div>
            <div className={cn + (isReverse ? ' show-reverse' : '')} style={isReverse ? {} : {transitionDelay: '.3s'}}>
                <div className='status' onClick={() => handleReverse()}>{status}</div>
                <div className='date'>{props.data.date}</div>
                <button onClick={() => {}}><img src={process.env.PUBLIC_URL + '/edit_icon.svg'} alt='' height='25' width='25' /></button>
            </div>
            <div className={'dashboard-tile reverse' + (isReverse ? ' show-reverse' : '')} onClick={() => handleReverse()} style={isReverse ? {transitionDelay: '.3s'} : {}}>
                <button>Update Status</button>
                <button className='destroy'>Delete</button>
            </div>
        </div>
    )
}

export default DashboardTile;