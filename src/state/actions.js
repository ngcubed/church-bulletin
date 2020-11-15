import {SET_AGENDA, SET_ANNOUNCEMENTS, SET_COVER} from './action-defs';

export const setCover = (cover) => {
    return {
        type: SET_COVER,
        payload: cover
    }
}

export const setAgenda = (agenda) => {
    return {
        type: SET_AGENDA,
        payload: agenda
    }
}

export const setAnnouncements = (announcements) => {
    return {
        type: SET_ANNOUNCEMENTS,
        payload: announcements
    }
}