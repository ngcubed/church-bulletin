import React, {useReducer, useContext} from 'react';

import {IS_LOADING, SET_AGENDA, SET_ANNOUNCEMENTS, SET_AUTH, SET_BULLETIN, SET_COVER, SET_ERROR_MSG, SET_LESSON, UNSET_AUTH} from './action-defs';

export const Store = React.createContext();

const initialState = {
    cover: null,
    agenda: null,
    announcements: null,
    lesson: null,
    isLoading: true,
    token: null
}

const reducer = (state, action) => {
    switch (action.type) {
        case SET_BULLETIN:
            return {
                ...state,
                cover: action.payload.cover,
                agenda: action.payload.agenda,
                announcements: action.payload.announcements,
                lesson: action.payload.lesson,
                isLoading: false
            }
        case SET_COVER:
            return {...state, cover: action.payload}   
        case SET_AGENDA:
            return {...state, agenda: action.payload}
        case SET_ANNOUNCEMENTS:
            return {...state, announcements: action.payload}
        case SET_LESSON:
            return {...state, lesson: action.payload}
        case IS_LOADING:
            return {...state, isLoading: action.payload}
        case SET_ERROR_MSG:
            return {...state, errMsg: action.payload}
        case SET_AUTH:
            return {...state, token: action.payload}
        case UNSET_AUTH:
            return {...state, token: null}
        default:
            return state;
    }
}

export const useStore = (findFunc) => {
    const {state} = useContext(Store);
    return findFunc ? findFunc(state) : state;
}

export const useDispatch = () => {
    const {dispatch} = useContext(Store);
    return dispatch; 
}

export const StoreProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = {
        state,
        dispatch
    };

    return (
        <Store.Provider value={value}>{props.children}</Store.Provider>
    )
}