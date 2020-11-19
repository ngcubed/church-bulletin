import React from 'react';
import './spinner.scss'
import {useStore} from '../../state/action-store';

const Spinner = () => {

    const {errMsg} = useStore();

    let message = errMsg !== undefined ? errMsg : 'Loading...';

    return (
        <div className='waiting'>
            <img src={process.env.PUBLIC_URL + '/christuslogo.png'} alt='logo' className='rotate' />
            <p>{message}</p>
        </div>
    )
}

export default Spinner;