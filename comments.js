export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const THUMB_UP = 'THUMB_UP';
export const THUMB_DOWN = 'THUMB_DOWN';

import { ADD_COMMENT, EDIT_COMMENT, DELETE_COMMENT, THUMB_UP, THUMB_DOWN } from './actions'

const initialState = {
    comments: []
};

function reducer(state = [], action) {
    switch(action.type) {
        case ADD_COMMENT:
            return Object.assign({}, state, {
                comments: [
                {
                    id: action.id,
                    text: action.text,
                    ratesUp: 0,
                    ratesDown: 0
                }
                , ...state]
            })
        case EDIT_COMMENT: 
            return Object.assign({}, state, {
                comments: [
                    id: state.comments.find(comment => comment.id == action.id),
                    text: action.text
                ]
            })
        case DELETE_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.filter(comment => comment.id !== action.id)
            });
        case THUMB_UP: 
            return Object.assign({}, state, {
                id: state.comments.find(comment => comment.id == action.id),
                ratesUp: ratesUp + 1
            });
        case THUMB_DWON: 
            return Object.assign({}, state, {
                id: state.comments.find(comment => comment.id == action.id),
                ratesDown: ratesUp + 1
            });
        default:
            return state;
    }
}