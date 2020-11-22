import {IS_LOADING, SET_AGENDA, SET_ANNOUNCEMENTS, SET_AUTH, SET_BULLETIN, SET_COVER, SET_ERROR_MSG, SET_LESSON, UNSET_AUTH} from './action-defs';

export const setBulletin = (bulletin) => {
    return {
        type: SET_BULLETIN,
        payload: bulletin
    }
}

export const setErrorMessage = (message) => {
    return {
        type: SET_ERROR_MSG,
        payload: message
    }
}

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

export const setLesson = (lesson) => {
    return {
        type: SET_LESSON,
        payload: lesson
    }
}

export const setAuth = (auth) => {
    return {
        type: SET_AUTH,
        payload: auth
    }
}

export const unsetAuth = () => {
    return {
        type: UNSET_AUTH
    }
}

export const isLoading = (isLoading) => {
    return {
        type: IS_LOADING,
        payload: isLoading
    }
}