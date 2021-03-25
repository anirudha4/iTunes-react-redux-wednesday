import {create} from 'apisauce'
import { FETCH_DATA, FETCH_ERROR } from './types';

const api = create({
    baseURL: 'https://itunes.apple.com'                                                                                                                                                  
})    
export const fetchData = (term) => async dispatch => {
    try {
        const res = await api.any({ method: 'GET',url: '/search', params: { term , media: "all", limit: 10}})
        console.log(res.data.results);
        dispatch({
            type: FETCH_DATA,
            payload: res.data.results
        })
    } catch (err) {
        dispatch({
            type: FETCH_ERROR,
            payload: err
        })
    }
}