import React, {useReducer, useContext} from 'react';

import {SET_AGENDA, SET_COVER} from './action-defs';

export const Store = React.createContext();

const initialState = {
    cover: null
}

const reducer = (state, action) => {
    switch (action.type) {
        case SET_COVER:
            return {...state, cover: action.payload}   
        case SET_AGENDA:
            return {...state, agenda: action.payload}
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