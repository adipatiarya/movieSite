import { GET_MOVIE_PENDING, GET_MOVIE_SUCCESS, GET_MOVIE_FAILURE } from './type';
import { handleActions } from 'redux-actions';
import { Map, List } from 'immutable';

let id = 0;

const initialState = Map({
    pending: false,
    error: false,
    data: List()
})

// export default handleActions({
//     // [SELECT_URL]: (state, action) => ({ ...state, url: action.url}),
//     [GET_MOVIE_PENDING]: (state, action) => ({ ...state, pending: true, error: false}),
//     [GET_MOVIE_SUCCESS]: (state, action) => ({ ...state, data: action.payload, pending: false}),
//     [GET_MOVIE_FAILURE]: (state, action) => ({ ...state, pending: false, error: true})
// },initialState)


export default handleActions({
    // [SELECT_URL]: (state, action) => state.set('url', action.url),
    [GET_MOVIE_PENDING]: (state, action) => state.set('pending', true).set('error', false),
    [GET_MOVIE_SUCCESS]: (state, { payload: data }) => {
        const item = Map({ id: id++, data })
        return state.update('data', data => data.push(item)).set('pending', false)    
        // return state.update('data', data => data)    
        // return state.set('data', data)
    },
    [GET_MOVIE_FAILURE]: (state, action) => state.set('pending', false).set('error', true)
}, initialState)