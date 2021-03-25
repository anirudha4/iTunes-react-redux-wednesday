import { FETCH_DATA, FETCH_ERROR, SET_TERM } from '../actions/types'

const initialState ={
    loading: true,
    data: [],
    term: ""
}

export default function(state = initialState, action){

    switch(action.type){
        case FETCH_DATA:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case FETCH_ERROR:
            return {
                ...state,
                loading: false,
                data: null
            }
        default:
            return state;
    }
}