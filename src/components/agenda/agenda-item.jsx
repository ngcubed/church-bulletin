import React from 'react';
import { useStore } from '../../state/action-store'
import { AGENDA_ITEMS, SONG_TYPES } from '../shared/shared-defs';
import { getPrayerByType, getSongByType, getSpeakerByOrder } from './agendaLogic';

const AgendaItem = (props) => {
    const { agenda } = useStore();
    if(!agenda) return <></>;

    let label = props.item.charAt(0) + props.item.slice(1).toLowerCase() + ':';
    let value;
    let title = '';

    switch (props.item) {
        case AGENDA_ITEMS.PRESIDING:
        case AGENDA_ITEMS.CONDUCTING:
        case AGENDA_ITEMS.CHORISTER:
        case AGENDA_ITEMS.ORGANIST:
            value = agenda[props.item.toLowerCase()];
            break;
        case AGENDA_ITEMS.SPEAKER:
            const speaker = getSpeakerByOrder(props.type, agenda.speakers);
            value = speaker.name;
            break;
        case AGENDA_ITEMS.PRAYER:
            const prayer = getPrayerByType(props.type, agenda.prayers);
            value = prayer.name;
            break;
        case AGENDA_ITEMS.SACRAMENT:
        case AGENDA_ITEMS.TESTIMONY:
            label = '';
            value = '';
            if(props.item === AGENDA_ITEMS.TESTIMONY) {
                title = <div className='agenda-item-title'>Sharing of Testimonies</div>
            } else {
                title = <div className='agenda-item-title'>Administration of the Sacrament</div>
            }
            break;
        case AGENDA_ITEMS.SONG:
            const song = getSongByType(props.type, agenda.songs);
            if(props.type === SONG_TYPES.SPECIAL) {
                label = 'Special Musical Number:';
            } else {
                label = props.type.charAt(0) + props.type.slice(1).toLowerCase() + " Song:";
            }
            value = song.number;
            title = <div className='agenda-item-title'>{song.title}</div>
            break;
        default:
            break;
    }

    return (
        <div className='agenda-item-container'>
            <div className='agenda-item'>
                <span className='agenda-item-label'>{label}</span>
                <span className='agenda0item-value'>{value}</span>
                {title}
            </div>
        </div>
    );
}

export default AgendaItem;