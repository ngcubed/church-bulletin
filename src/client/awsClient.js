import { DateTime } from 'luxon';
import {SONG_TYPES, PRAYER_TYPES, AGENDA_ITEMS, ANNOUNCEMENT_TYPES} from '../components/shared/shared-defs';

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

export const getLatestAnnouncements = () => {
    const announcements = [
        {message: 'The option for streaming Sacrament Meeting is again available for next Sunday. Follow the link below to stream the meeting.  \n[Fair Oaks Ward Sacrament Meeting for Nov 15th](http://mywebcast.churchofjesuschrist.org/Events/sanantoniotexaslacanterastake)', type: ANNOUNCEMENT_TYPES.GENERAL},
        {message: 'Bro Carson Todd, one the young men in the ward, remains in the hospital. We have an opportunity to provide service as we rally around the Todd family in support of Carson. The Relief Society is coordinating meal help for the Todd family and you can follow the link below to find a day to provide them with a meal.  \n[https://www.signupgenius.com/go/60b0f4baca628a46-todd1](https://www.signupgenius.com/go/60b0f4baca628a46-todd1)', type: ANNOUNCEMENT_TYPES.GENERAL},
        {message: 'Bishop Baum is now conducting annual tithing settlement. Sign up sheets are posted on the clerk office door. Sign up times are posted below. Please sign up at the clerks office or contact Bro. Harrison to schedule.  \n  \nThursday November 12th  from 6:30 to 8:30  \nSunday  November 15th  from 1:00 to 4:00  \nThursday November 19th  from 6:30 to 8:30', type: ANNOUNCEMENT_TYPES.GENERAL},
        {message: 'We will begin having Youth Night on a more consistent basis (every Tuesday) in the coming weeks but for now each individual class and quorum is coordinating their youth night and the frequency in which they meet. Individual classes/quorums will be reaching out to members of their corresponding group with info on this week’s activity.', type: ANNOUNCEMENT_TYPES.YMYW},
        {message: 'Boys and Girls Primary Activity days will meet just one time this month. The girls already met the first Tuesday of November. **The boys will meet on the 17th.**  Starting in December, both boys and girls will meet twice a month on the first and third Tuesdays.  They will meet at the church at 7:00pm unless otherwise indicated.', type: ANNOUNCEMENT_TYPES.PRIMARY},
        {message: 'With the pandemic, many of us have had to adapt to many changes in our lives. Our Missionaries, Elder Smith and Elder Collins, have also made some adaptations as to how we approach missionary work.  The Elders have been implementing a new social media platform and their new Facebook page can be found here: [https://m.facebook.com/TheChurchofJesusChristinBoerne/](https://m.facebook.com/TheChurchofJesusChristinBoerne/)  \nThe Elders would love to have everyone check it, share the content and like the page. This has the potential to be a great missionary tool and the Elders would welcome any ideas for future posts. Please feel free to reach out to the missionaries or our Ward Mission Leader, Bro. Bolli to learn more.', type: ANNOUNCEMENT_TYPES.MISSIONARIES},
        {message: 'Also, as always, please take the opportunity to feed the Elders. They can come to your home or can meet you for a delivery to their apartment. There are still a few slots to fill for November. Follow the link below to sign up.  \n  \n[https://www.signupgenius.com/go/30e0d4eabab2aa0fd0-missionary6](https://www.signupgenius.com/go/30e0d4eabab2aa0fd0-missionary6)', type: ANNOUNCEMENT_TYPES.MISSIONARIES}
    ];

    return Promise.resolve(announcements);
}