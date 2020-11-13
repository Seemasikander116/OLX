import { ADD_TO_CART } from '../constants'
import {combineReducers} from "redux";
import {firebaseReducer} from "react-redux-firebase";
import {firestoreReducer} from "redux-firestore";
const initialState = {
    cardData: []
}
export default function cardItems(state = [], action) {
    switch (action.type) {
        case ADD_TO_CART:
             console.warn("reducer",action)
            return [
                ...state,
                {cardData: action.data}
            ]
        default:
            return state
    }


}

export const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer
});
