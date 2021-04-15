import {LOGIN, LOGOUT} from '../types'

const initialState = {
    _id : '',
    email : '',
}

export default function (state= initialState,action){
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                _id : action.payload._id,
                email : action.payload.email,
            }
                
        case LOGOUT:
            return {
                ...state,
                id: '',
                email: '',
            }
        default:
            return state;
    }
}