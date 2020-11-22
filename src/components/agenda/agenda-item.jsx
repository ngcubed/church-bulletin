import React from 'react';
import { useStore } from '../../state/action-store'
import { AGENDA_ITEMS, PRAYER_TYPES, SONG_TYPES } from '../shared/shared-defs';
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
            if(props.type === PRAYER_TYPES.OPENING) {
                label = 'Invocation'
            }
            if(props.type === PRAYER_TYPES.CLOSING) {
                label = 'Benediction'
            }
            break;
        case AGENDA_ITEMS.SACRAMENT:
        case AGENDA_ITEMS.TESTIMONY:
            label = '';
            value = '';
            if(props.item === AGENDA_ITEMS.TESTIMONY) {
                title = <div className='agenda-item-title'><strong>Sharing of Testimonies</strong></div>
            } else {
                title = <div className='agenda-item-title'><strong>Administration of the Sacrament</strong></div>
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
            <div className='agenda-item-label-value'>
                <div className='agenda-item-label'>{label}</div>
                <div className='agenda-item-value'>{value}</div>
            </div>
          {title}
        </div>
    );
}

export default AgendaItem;