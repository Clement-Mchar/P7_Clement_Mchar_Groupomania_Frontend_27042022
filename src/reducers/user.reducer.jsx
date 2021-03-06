import { DELETE_USER, GET_USER, UPDATE_BIO, UPLOAD_PICTURE } from "../actions/user.actions";


const initialState = {};

export default function userReducer ( state = initialState, action ) {
    switch ( action.type ) {
        case GET_USER:
            return action.payload;
        case UPLOAD_PICTURE:
            return {
                ...state,
                profilPicture: action.payload
            };
        case UPDATE_BIO:
            return {
                ...state,
                bio: action.payload
            };
        case DELETE_USER:
            return { ...state.splice( 1 ) };
        default:
            return state;
    }
}