import React, {useEffect} from 'react';
import {useStore, useDispatch} from '../../state/action-store';
import {getLatestAgenda} from '../../client/awsClient';
import {setAgenda} from '../../state/actions';
import './agenda.scss';
import AgendaItem from './agenda-item';
import { AGENDA_ITEMS } from '../shared/shared-defs';

const Agenda = () => {
    const { agenda } = useStore();
    const dispatch = useDispatch();

    useEffect(() => {
        const getAgenda = async () => {
            const latestAgenda = await getLatestAgenda();
            if(latestAgenda.error) {
                console.log('unable to get the latest agenda');
            } else {
                dispatch(setAgenda(latestAgenda));
            }
        };
        getAgenda();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    if(!agenda) return <></>;

    const orderedAgenda = agenda.order.map((agendaItem, index) => {
        return <AgendaItem item={agendaItem.item} type={agendaItem.type} key={agendaItem.item+agendaItem.type+index} />
    })

    return (
        <div className='agenda-container'>
            <h2>Agenda</h2>
            <div className='agenda-whos-who'>
                <AgendaItem item={AGENDA_ITEMS.PRESIDING} />
                <AgendaItem item={AGENDA_ITEMS.CONDUCTING} />
                <AgendaItem item={AGENDA_ITEMS.CHORISTER} />
                <AgendaItem item={AGENDA_ITEMS.ORGANIST} />
            </div>
            {orderedAgenda}
        </div>
    )
}

export default Agenda;