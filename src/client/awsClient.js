import { DateTime } from 'luxon';
import {SONG_TYPES, PRAYER_TYPES, AGENDA_ITEMS} from '../components/shared/shared-defs';

export const getLatestCover = () => {
    const cover = {
        name: 'Fair Oaks Ward',
        type: 'Sacrament Meeting',
        date: DateTime.local().toFormat('MMM d, yyyy'),
        image: 'https://assets.ldscdn.org/a8/11/a811320d16783b8f9acdef87ef69baadecd3be831060309/jesus_christ_blessing_children_nephite.jpeg',
        imageAlt: '',
        logo: process.env.PUBLIC_URL + '/oaktree.png'
    }

    return Promise.resolve(cover);
}

export const getLatestAgenda = () => {
    const agenda = {
        presiding: 'Bishop Ryan Baum',
        conducting: 'Bro. TJ Campbell',
        chorister: 'Sis. Aubrey Buchei',
        organist: 'Bro. Taylor Levos',
        songs: [
            { type: SONG_TYPES.OPENING, title: 'I am a Child of God', number: '301', desc: ''},
            { type: SONG_TYPES.CLOSING, title: 'God Be With You Till We Meet Again', number: '152', desc: ''},
            { type: SONG_TYPES.SACRAMENT, title: 'I Stand All Amazed', number: '193', desc: ''},
            { type: SONG_TYPES.INTERMEDIATE, title: 'Count Your Blessings', number: '241', desc: ''}
        ],
        speakers: [
            { name: 'Bro. Logan Graves', order: '1' },
            { name: 'Sis. Haley Graves', order: '0' },
            { name: 'Sis. Katelyn Graves', order: '2' },
            { name: 'Bro. Nick Graves', order: '3' }
        ],
        prayers: [
            { name: 'Bro. Cody Harrison', type: PRAYER_TYPES.OPENING },
            { name: 'Sis. Emily Harrison', type: PRAYER_TYPES.CLOSING }
        ],
        order: [
            {item: AGENDA_ITEMS.SONG, type: SONG_TYPES.OPENING},
            {item: AGENDA_ITEMS.PRAYER, type: SONG_TYPES.OPENING},
            {item: AGENDA_ITEMS.SONG, type: SONG_TYPES.SACRAMENT},
            {item: AGENDA_ITEMS.SACRAMENT},
            {item: AGENDA_ITEMS.SPEAKER, type: '0'},
            {item: AGENDA_ITEMS.SPEAKER, type: '1'},
            {item: AGENDA_ITEMS.SONG, type: SONG_TYPES.INTERMEDIATE},
            {item: AGENDA_ITEMS.SPEAKER, type: '2'},
            {item: AGENDA_ITEMS.SPEAKER, type: '3'},
            {item: AGENDA_ITEMS.SONG, type: SONG_TYPES.CLOSING},
            {item: AGENDA_ITEMS.PRAYER, type: PRAYER_TYPES.CLOSING}
        ]
    }

    return Promise.resolve(agenda);
}