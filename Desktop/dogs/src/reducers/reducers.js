import { API_DATA_REQUEST, API_DATA_RECEIVED, API_DATA_FAILED } from '../constants/constants'

const initialState = {
    fetching: false,
    dog: [],
    error: null
};

// the reducer
export function reducer(state = initialState, {type, payload}) {
    switch (type) {
        case API_DATA_REQUEST:
            return { ...state, fetching: true, error: null };
        case API_DATA_RECEIVED:
            payload.sort((a, b) => Object.values(b) - Object.values(a))
            return { ...state, fetching: false, dog: payload.slice(0, 10)};
        case API_DATA_FAILED:
            return { ...state, fetching: false, dog: null, error: payload};
        default:
            return state;
    }
}